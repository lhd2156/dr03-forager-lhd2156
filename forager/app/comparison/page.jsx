"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import MushroomComparisonTable from "@/components/MushroomComparisonTable";
import NavBar from "@/components/NavBar";
import { mushrooms } from "@/data/development";

function ComparisonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id"), 10);
  const comparedMushroom = mushrooms.find((m) => m.id === id) || mushrooms[0];

  const userMushroom = {
    name: "Your Photo",
    image: "/images/mushroom.png",
    capShape: "Flat",
    capColor: "Brown",
    capTexture: "Smooth",
    gillType: "Free",
    gillColor: "White",
    stemShape: "Slender",
    stemColor: "White",
    stemRing: "Absent",
    habitat: "?",
  };

  return (
    <div className="w-full min-h-screen bg-[#F1F3EB] flex flex-col items-center pb-20">
      {/* Header */}
      <div className="greenBackground text-white py-2 px-4 flex justify-between items-center w-full">
        <button onClick={() => router.back()} className="text-white text-base">←</button>
        <h1 className="text-lg font-bold">Compare</h1>
        <div></div>
      </div>

      {/* Warning Box - only show if toxic */}
      {comparedMushroom.isToxic && (
        <div className="bg-red-500 text-white p-3 mt-4 mx-4 rounded-lg w-[90%] flex flex-col items-center shadow-md">
          <p className="text-sm font-bold uppercase mb-1">Warning</p>
          <div className="flex items-center gap-2">
            <img src="/icons/icon_warning.svg" alt="Warning" className="w-5 h-5" />
            <p className="text-sm">This is a toxic species, proceed with caution.</p>
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="flex justify-between items-center gap-6 mt-6 px-4 w-full max-w-[95%]">
        {/* User Mushroom */}
        <div className="flex flex-col items-center">
          <div className="border border-gray-400 shadow-lg rounded-lg p-4 bg-white w-40 h-56 flex justify-center items-center">
            <img src={userMushroom.image} alt="Your Photo" className="w-36 h-36 rounded-md shadow-md" />
          </div>
          <p className="text-base font-semibold mt-2 text-gray-900">{userMushroom.name}</p>
        </div>

        {/* Compared Mushroom */}
        <div className="flex flex-col items-center">
          <div className="border border-gray-400 shadow-lg rounded-lg p-4 bg-white w-40 h-56 flex justify-center items-center relative">
            <img src={comparedMushroom.image} alt={comparedMushroom.name} className="w-36 h-36 rounded-md shadow-md" />
            {comparedMushroom.isToxic && (
              <div className="absolute top-2 left-2 flex items-center">
                <img src="/images/skull.png" alt="Skull Icon" className="w-5 h-5 mr-1" />
                <div className="bg-red-500 text-white px-2 py-1 text-xs rounded-md shadow-md">
                  {comparedMushroom.matchPercentage}% Match
                </div>
              </div>
            )}
          </div>
          <p className="text-base font-semibold mt-2 text-gray-900">{comparedMushroom.name}</p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-6 w-full flex justify-center px-4">
        <div className="w-full max-w-[95%]">
          <MushroomComparisonTable userMushroom={userMushroom} comparedMushroom={comparedMushroom} />
        </div>
      </div>

      <NavBar />
    </div>
  );
}

export default function MushroomComparisonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComparisonContent />
    </Suspense>
  );
}