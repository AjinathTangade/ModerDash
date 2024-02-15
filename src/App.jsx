import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Calendar from "./components/APPS/Calendar/Calendar";
import { Routes, Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="xl:flex overflow-hidden px-5">
        <Routes>
          <Route path="/calendar" component={Calendar} />
          {/* Add more routes as needed */}
        </Routes>
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
