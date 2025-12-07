import React from "react";
import Login from "./page/Login";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {Routes, Route} from "react-router-dom"
import Dashboard from "./page/Admin/Dashboard";
import AllApointments from "./page/Admin/AllApointments";
import AddDoctor from "./page/Admin/AddDoctor";
import DoctorsList from "./page/Admin/DoctorsList";

// [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]
// bg-[#5f6FFF]

function App() {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllApointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
