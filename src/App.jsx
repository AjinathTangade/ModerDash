import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Calendar from "./components/APPS/Calendar/Calendar";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactTable from "./components/APPS/ContactTable/ContactTable";
import Kanban from "./components/APPS/Kanban/Kanban";
import Chat from "./components/APPS/Chat/Chat";
import Email from "./components/APPS/Email/Email";
import Notes from "./components/APPS/Notes/Notes";
import ContactList from "./components/APPS/ContactList/ContactList";
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
          <Route path="/email" element={<Email />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contactlist" element={<ContactList />} />
          
         
        </Routes>
      </div>
    </>
  );
}

export default App;
