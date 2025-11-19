import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center 
                    bg-black/70 backdrop-blur-md z-[9999]">

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-500 
                      rounded-full animate-spin"></div>

      
    </div>
  );
}