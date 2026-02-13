"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import WarningIcon from '@/components/WarningIcon';

export default function MushroomCard({ image, name, isToxic, id }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/mushroom?id=${id}`);
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
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
      <p className="text-xs font-semibold text-black text-center mt-1">{name}</p>
    </div>
  );
}