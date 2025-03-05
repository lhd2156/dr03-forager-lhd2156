import { useState } from "react";

const PercentageDescription = ({ onClose }) => {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg w-[300px]">
        <div className="flex justify-between items-center">
          <strong></strong>
          <button onClick={onClose} className="text-white font-bold">✖</button>
        </div>
        <p className="mt-2 text-sm">
          Percentages indicate the confidence level of a match based on image features and database comparisons.
        </p>
      </div>
    );
  };
  
export default PercentageDescription;
