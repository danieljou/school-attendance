import React from "react";

const Notifs = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-blue-100 border border-blue-200 rounded-lg shadow">
          <div>
            <h5 className="text-lg font-bold text-blue-800">Info!</h5>
            <p className="text-blue-600">New updates are available.</p>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifs;
