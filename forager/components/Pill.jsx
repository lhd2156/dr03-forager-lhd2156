import React from "react";

const Pill = ({ label, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
        isSelected ? "greenBackground text-white" : "bg-gray-300 text-black"
      }`}
    >
      {label}
    </div>
  );
};

export default Pill;
