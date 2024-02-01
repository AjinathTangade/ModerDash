import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="xl:flex overflow-hidden px-5">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
