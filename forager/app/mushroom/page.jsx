"use client";

import { useState, useEffect, Suspense } from "react";
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

function MushroomContent() {
  const searchParams = useSearchParams();
  const mushroomId = parseInt(searchParams.get("id"), 10);
  const [showWarning, setShowWarning] = useState(false);
  const mushroom = mushrooms.find((m) => m.id === mushroomId);

  useEffect(() => {
    if (mushroomId) {
      sessionStorage.setItem("lastMushroomId", mushroomId);
    }
  }, [mushroomId]);

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
      <MushroomHeader className="text-sm py-2" />
      <div className="overflow-auto flex flex-col items-center px-2 pb-20 w-full max-w-[390px]">
        {showWarning && <WarningOverlay onClose={handleCloseWarning} />}
        <div className="mt-3 w-full px-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 text-sm">Not what you expected?</p> 
            <ReportError />
          </div>
          <WarningBox isToxic={mushroom.isToxic} />
        </div>
        <div className="flex justify-end w-full px-4 mt-2">
          <CompareButton />
        </div>
        <div className="mt-4 flex justify-center w-full px-4">
          <SelectedMushroomCard 
            image={mushroom.image} 
            isToxic={mushroom.isToxic} 
            matchPercentage={mushroom.matchPercentage}
          />
        </div>
        <div className="w-full px-4 mt-2">
          <MushroomDetails 
            name={mushroom.name} 
            scientificName={mushroom.scientificName} 
            fastFacts={mushroom.fastFacts || { capDiameter: "Unknown", gillColor: "Unknown" }} 
          />
        </div>
        <div className="mt-6 w-full px-4">
          <SimilarMatchList matches={mushrooms.filter(m => m.id !== mushroomId)} />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default function MushroomPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MushroomContent />
    </Suspense>
  );
}