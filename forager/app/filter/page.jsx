"use client";
import React, { useState, useEffect } from "react";
import FilterSettings from "@/components/FilterSettings";
import { filterLists } from "@/data/development";
import { useRouter } from "next/navigation";

export default function FilterPage() {
  const router = useRouter();

  const [filters, setFilters] = useState(() => {
    if (typeof window === "undefined") return filterLists;
    const storedFilters = sessionStorage.getItem("activeFilters");
    return storedFilters ? JSON.parse(storedFilters) : filterLists;
  });

  const handlePillClick = (categoryIndex, pillLabel) => {
    const updatedFilters = filters.map((category, index) => {
      if (index === categoryIndex) {
        return {
          ...category,
          pills: category.pills.map((pill) =>
            pill.label === pillLabel
              ? { ...pill, isSelected: !pill.isSelected }
              : pill
          ),
        };
      }
      return category;
    });
    setFilters(updatedFilters);
    sessionStorage.setItem("activeFilters", JSON.stringify(updatedFilters));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[95%] max-w-md h-[90%] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        
        <div className="flex justify-center items-center border-b pb-3 pt-2 relative">
          <h1 className="font-bold text-2xl text-black">FILTER</h1>
          <button 
            onClick={() => router.back()} 
            className="absolute right-4 text-black text-3xl"
          >
            ✖
          </button>
        </div>

        <div className="mt-4 flex-grow overflow-y-auto">
          <FilterSettings lists={filters} onPillClick={handlePillClick} />
        </div>
      </div>
    </div>
  );
}