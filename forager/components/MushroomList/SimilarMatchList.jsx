import { useState } from "react";
import PercentageDescription from "@/components/PercentageDescription";

const SimilarMatchList = ({ matches }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative w-full">
      {/* Header with Info Button */}
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold mb-3 text-gray-900">Similar Matches</h2>
        <button onClick={() => setShowInfo(true)} className="text-gray-600">
          ℹ️
        </button>
      </div>

      {/* Show Info Box When Clicked */}
      {showInfo && <PercentageDescription onClose={() => setShowInfo(false)} />}

      {/* Match List */}
      <div className="grid grid-cols-2 gap-6">
        {matches.map((mushroom, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg p-2">
            {/* Match Percentage Badge */}
            <div className="absolute top-2 left-2 flex items-center">
              <span
                className={`px-2 py-1 text-sm rounded-lg font-bold text-white ${
                  mushroom.isToxic
                    ? "bg-red-500" // Red for toxic mushrooms
                    : mushroom.matchPercentage === 90
                    ? "bg-green-600"
                    : mushroom.matchPercentage === 60
                    ? "bg-gray-600"
                    : "bg-gray-600" // Default gray for anything else
                }`}
              >
                {mushroom.matchPercentage}%
              </span>
            </div>

            {/* Mushroom Image */}
            <img
              src={mushroom.image}
              alt={mushroom.name}
              className="w-full h-auto rounded-md"
            />

            {/* Mushroom Name */}
            <p className="text-center text-lg font-semibold mt-3 text-gray-900">
              {mushroom.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMatchList;
