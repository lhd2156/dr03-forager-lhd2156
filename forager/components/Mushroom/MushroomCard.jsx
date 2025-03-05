"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import WarningIcon from '@/components/WarningIcon';

export default function MushroomCard({ image, name, isToxic }) {
  const router = useRouter();

  // Click handler (only for Death Cap)
  const handleClick = () => {
    if (name === "Death Cap") {
      router.push(`/mushroom?id=1`); // Redirect to MushroomPage for Death Cap
    }
  };

  return (
    <div
      className={`flex flex-col items-center ${name === "Death Cap" ? "cursor-pointer" : ""}`}
      onClick={name === "Death Cap" ? handleClick : undefined}
    >
      {/* Shrunk Mushroom Image Container */}
      <div className="relative w-[90px] h-[100px] bg-white rounded-lg shadow-md p-1">
        {isToxic && (
          <div className="absolute top-2 left-2">
            <WarningIcon className="w-4 h-4" />
          </div>
        )}
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image || "/images/default.jpg"}
          alt={name}
          onError={(e) => (e.target.src = "/images/default.jpg")}
        />
      </div>

      {/* Shrunk Text Below Image */}
      <p className="text-xs font-semibold text-black text-center mt-1">{name}</p>
    </div>
  );
}
