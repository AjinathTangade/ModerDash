import React from "react";
import SideBar from "./components/SliderBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="flex gap-20 px-5 border">
        <SideBar />
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
