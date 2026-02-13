import { useState } from "react";
import Link from "next/link";
import PercentageDescription from "@/components/PercentageDescription";

const SimilarMatchList = ({ matches }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-xl font-bold text-gray-900">Similar Matches</h2>
        <button onClick={() => setShowInfo(true)} className="text-gray-600 flex items-center">
          ℹ️
        </button>
      </div>

      {showInfo && <PercentageDescription onClose={() => setShowInfo(false)} />}

      <div className="grid grid-cols-2 gap-4">
        {matches.map((mushroom, index) => (
          <Link key={index} href={`/mushroom?id=${mushroom.id}`}>
              <div className="relative bg-white shadow-lg rounded-lg p-2 flex flex-col overflow-hidden h-[210px]">              <div className="absolute top-2 left-2 z-10">
                <span
                  className={`px-2 py-1 text-sm rounded-lg font-bold text-white ${
                    mushroom.isToxic
                      ? "bg-red-500"
                      : mushroom.matchPercentage >= 90
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }`}
                >
                  {mushroom.matchPercentage}%
                </span>
              </div>
              <div className="w-full h-[160px] flex-shrink-0">
                <img
                  src={mushroom.image}
                  alt={mushroom.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-center text-sm font-semibold mt-2 text-gray-900">
                {mushroom.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarMatchList;