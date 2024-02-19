import React, { useState, useEffect } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
function Popup({ isOpen, onClose, onConfirm, onCancel, initialContent }) {
  const [inputValue, setInputValue] = useState(initialContent);

  useEffect(() => {
    setInputValue(initialContent);
  }, [initialContent]); // Update inputValue when initialContent changes

  // Function to handle confirming the input value
  const handleConfirm = () => {
    if (inputValue.trim() !== "") {
      onConfirm(inputValue);
      setInputValue(""); // Clear input after confirming
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center bg-black justify-center z-20 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-5 z-30 min-w-96 h-56 flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add List</h2>
          </div>
          <div>
            <i
              className="fi fi-br-cross text-sm cursor-pointer hover:text-red-400"
              onClick={onCancel}
            ></i>
          </div>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="List Name"
            className="w-full p-3 border-2 border-indigo-300 rounded-lg outline-none"
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            className=" px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleConfirm}
          >
            Add List
          </button>
          <button
            className="px-4 py-2 bg-red-100 text-gray-700 rounded-md text-red-500 font-medium hover:bg-red-400 hover:text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
