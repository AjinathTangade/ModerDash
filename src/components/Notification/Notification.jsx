import React from "react";

function Notification() {
  return (
    <div>
      <div className="px-5 bg-indigo-50 rounded-lg py-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-semibold leading">Notification</h4>
            <p className="text-sm text-gray-600">Flexible Plans Tailored to Fit Your Community's Unique Needs!</p>
          </div>
          <div>
            <img
              src="/notification.png"
              alt="notification"
              className="h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
