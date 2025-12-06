import React, { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const filterDoc = useMemo(() => {
    if (speciality) {
      return doctors.filter((doc) => doc.speciality === speciality);
    } else {
      return doctors;
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden cursor-pointer ${showFilter ? "bg-[#5f6FFF]" : ""}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}>
          <p className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician"? "bg-indigo-100 text-black": ""}`} onClick={() => speciality === "General physician" ? navigate("/doctors") : navigate("/doctors/General physician")} >
            General physician</p>
          <p
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Gynecologist" ? navigate("/doctors") : navigate("/doctors/Gynecologist") } >
            Gynecologist
          </p>
          <p
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() =>speciality === "Dermatologist"? navigate("/doctors"): navigate("/doctors/Dermatologist")}>
            Dermatologist
          </p>
          <p
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : "" }`} onClick={() => speciality === "Pediatricians" ? navigate("/doctors") : navigate("/doctors/Pediatricians")}>
            Pediatricians
          </p>
          <p
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === "Neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist")}>
            Neurologist
          </p>
          <p
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist"? "bg-indigo-100 text-black": ""}`} onClick={() => speciality === "Gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")}>
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              onClick={() => navigate(`/appointment/${item._id}`)}
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-gray-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
