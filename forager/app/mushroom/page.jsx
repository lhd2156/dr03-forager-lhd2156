"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import SelectedMushroomCard from "@/components/Mushroom/SelectedMushroomCard";
import SimilarMatchList from "@/components/MushroomList/SimilarMatchList";
import { mushrooms } from "@/data/development";
import WarningOverlay from "@/components/Mushroom/WarningOverlay";
import MushroomHeader from "@/components/Mushroom/MushroomHeader";
import ReportError from "@/components/Mushroom/ReportError";
import WarningBox from "@/components/Mushroom/WarningBox";
import MushroomDetails from "@/components/Mushroom/MushroomDetails";
import CompareButton from "@/components/CompareButton"; 

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const mushroomId = parseInt(searchParams.get("id"), 10);
  const [showWarning, setShowWarning] = useState(false);
  const mushroom = mushrooms.find((m) => m.id === mushroomId);

  useEffect(() => {
    if (mushroom?.isToxic && !sessionStorage.getItem(`seenWarning_${mushroomId}`)) {
      setShowWarning(true);
      sessionStorage.setItem(`seenWarning_${mushroomId}`, "true");
    }
  }, [mushroom, mushroomId]);

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  if (!mushroom) {
    return (
      <div className="text-center text-gray-500 mt-4">
        <p>Mushroom not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F1F3EB] flex flex-col items-center">
      {/* Header - Shrunk for Proper Fit */}
      <MushroomHeader className="text-sm py-2" />

      {/* Scrollable Content - Properly Scaled */}
      <div className="overflow-auto flex flex-col items-center px-2 pb-20 w-full max-w-[340px]">
        
        {/* Show Warning Only Once */}
        {showWarning && <WarningOverlay onClose={handleCloseWarning} className="max-w-[90%] text-sm p-2" />}

        {/* Report Error & Warning Box - Shrunk */}
        <div className="mt-3 w-full max-w-[320px]">
          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 text-sm">Not what you expected?</p> 
            <ReportError className="text-xs px-2 py-1" />
          </div>
          <WarningBox className="text-xs px-2 py-1" />
        </div>

        {/* Compare Button */}
        <div className="flex justify-end w-full max-w-[320px] mt-2">
          <CompareButton className="px-2 py-1 text-xs" />
        </div>

        {/* Image & Percentage Match Section - Shrunk */}
        <div className="relative mt-4 flex flex-col items-center snap-center w-full max-w-[280px]">
          <SelectedMushroomCard image={mushroom.image} isToxic={mushroom.isToxic} className="max-w-[260px]" />
        </div>

        {/* Mushroom Details */}
        <div className="w-full max-w-[320px]">
          <MushroomDetails 
            name={mushroom.name} 
            scientificName={mushroom.scientificName} 
            fastFacts={mushroom.fastFacts || { capDiameter: "Unknown", gillColor: "Unknown" }} 
          />
        </div>

        {/* Similar Matches */}
        <div className="mt-6 w-full max-w-[320px] flex flex-col items-center">
          <h2 className="text-base font-semibold">Similar Matches</h2>
          <SimilarMatchList matches={mushrooms.filter(m => m.id !== mushroomId)} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
}
