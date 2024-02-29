import React, { useState, useEffect } from "react";

function PopupMessage({ message, onClose }) {
  return (
    <div className="popup h-20 border rounded-lg bg-blue-500 w-64 p-3 absolute right-20 top-5">
      <div className="popup-content flex flex-col gap-2 items-center ">
        <div className=" flex gap-3 items-center">
          <span>
            <i className="fi fi-rr-exclamation font-medium text-sm text-white"></i>
          </span>
          <p className="font-medium text-sm text-white">{message}</p>
          <button onClick={onClose}>
            <i className="fi fi-br-cross text-sm text-white"></i>
          </button>
        </div>
        <div>
          <p className="font-medium text-xs text-white">
            Easy to costomize the Template!!!
          </p>
        </div>
      </div>
    </div>
  );
}

function SonnerAlr() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setPopupMessage("Welcome to our website!");
    setShowPopup(true);

    const timeout = setTimeout(() => {
      setShowPopup(false);
      setPopupMessage("");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <div>
      {showPopup && (
        <PopupMessage message={popupMessage} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default SonnerAlr;
