import React from "react";
import { assets } from "../../assets/assets_admin/assets";
import { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

function AddDoctor() {
  const [form, setForm] = useState({
    docImg: false,
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    about: "",
    speciality: "General physician",
    degree: "",
    address1: "",
    address2: "",
  });

  const { backendUrl, aToken } = useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "docImg") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!form.docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", form.docImg);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("experience", form.experience);
      formData.append("fees", Number(form.fees));
      formData.append("about", form.about);
      formData.append("speciality", form.speciality);
      formData.append("degree", form.degree);
      formData.append(
        "address",
        JSON.stringify({ line1: form.address1, line2: form.address2 })
      );

      // console log formdata
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setForm({
          docImg: false,
          name: "",
          email: "",
          password: "",
          experience: "1 Year",
          fees: "",
          about: "",
          speciality: "General physician",
          degree: "",
          address1: "",
          address2: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <form className="m-5 w-full" onSubmit={onSubmitHandler}>
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border border-zinc-300 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              src={
                form.docImg
                  ? URL.createObjectURL(form.docImg)
                  : assets.upload_area
              }
              alt=""
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            name="docImg"
            onChange={handleChange}
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col placeholder-gray-400">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                type="text"
                placeholder="Name"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                className="border border-zinc-300 rounded px-3 py-2"
                name="experience"
                value={form.experience}
                onChange={handleChange}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                type="number"
                placeholder="fees"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="fees"
                value={form.fees}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                className="border border-zinc-300 rounded px-3 py-2"
                name="speciality"
                value={form.speciality}
                onChange={handleChange}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="degree"
                value={form.degree}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                type="text"
                placeholder="address 1"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="address1"
                value={form.address1}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="address 2"
                required
                className="border border-zinc-300 rounded px-3 py-2"
                name="address2"
                value={form.address2}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            placeholder="write about doctor"
            rows={5}
            required
            className="w-full px-4 pt-2 border border-zinc-300 rounded"
            name="about"
            value={form.about}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-[#5f6FFF] px-10 py-3 mt-4 text-white rounded-full"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
}

export default AddDoctor;
