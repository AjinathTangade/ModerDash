import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Calendar from "./components/APPS/Calendar/Calendar";
import { Routes, Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import TopPerformers from "./components/TopPerformers/TopPerformers";
import ContactTable from "./components/APPS/ContactTable/ContactTable";
import Kanban from "./components/APPS/Kanban/Kanban";
import Chat from "./components/APPS/Chat/Chat";
function App() {
  return (
    <>
      <div className="xl:flex overflow-hidden px-5 xl:justify-between">
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contacttable" element={<ContactTable/>} />
          <Route path="/kanban" element={<Kanban/>} />
          <Route path="/chat" element={<Chat/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
