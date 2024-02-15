import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Calendar from "./components/APPS/Calendar/Calendar";
import { Routes, Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <div className="xl:flex overflow-hidden px-5">
        <SideBar />
        <NavBar />
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
