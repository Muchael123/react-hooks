import React from "react";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 md:hidden">
      <div className="flex justify-between">
        <a href="#" className="text-white px-4 py-2 rounded-md">
          Home
        </a>
        <a href="#" className="text-white px-4 py-2 rounded-md">
          About
        </a>
        <a href="#" className="text-white px-4 py-2 rounded-md">
          Services
        </a>
        <a href="#" className="text-white px-4 py-2 rounded-md">
          Contact
        </a>
      </div>
    </div>
  );
};

export default BottomNavBar;
