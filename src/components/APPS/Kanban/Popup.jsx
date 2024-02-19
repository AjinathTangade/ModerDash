import React, { useState } from "react";

function Popup({ isOpen, onClose, onConfirm, onCancel, initialContent }) {
  // State variable for the input value
  const [inputValue, setInputValue] = useState(initialContent);

  // Function to handle confirming the input value
  const handleConfirm = () => {
    if (inputValue.trim() !== "") {
      // Call the parent component's onConfirm function with the input value
      onConfirm(inputValue);
      // Clear the input field after confirming
      setInputValue("");
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Note Name"
        />
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleConfirm}>
            Save
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
