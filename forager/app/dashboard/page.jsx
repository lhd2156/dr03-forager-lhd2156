"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import FilterMushrooms from "@/components/FilterMushrooms";
import { FaFilter } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { filterLists } from "@/data/development";
import "@/styles/globals.css"; // ✅ Import global styles
import Image from "next/image";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedFilters = sessionStorage.getItem("activeFilters");
    if (storedFilters) {
      const parsedFilters = JSON.parse(storedFilters);
      const selectedFilters = parsedFilters.flatMap((category) =>
        category.pills.filter((pill) => pill.isSelected).map((pill) => pill.label)
      );
      setActiveFilters(selectedFilters);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      {/* ✅ Header with Profile Image */}
      <div className="greenBackground flex justify-between items-center w-full p-6 h-40">
        <h1 className="font-bold text-4xl text-white leading-tight">
          Hi,<br />Chantelle!
        </h1>
        {/* ✅ Replaced Icon with Image */}
        <Image 
          src="/images/profile.png" 
          alt="Profile Picture" 
          width={50} 
          height={50} 
          className="rounded-full border-2 border-white"
        />
      </div>

      {/* ✅ Search Bar */}
      <div className="p-4 flex items-center gap-2 bg-white">
        <div className="flex-grow">
          <Search onSearch={setSearchQuery} />
        </div>
        <button 
          className="text-green-700 text-xl"
          onClick={() => router.push("/filter")}
        >
          <FaFilter />
        </button>
      </div>

      {/* ✅ My Collection Title */}
      <div className="p-4 bg-white">
        <h2 className="text-black font-bold text-xl">My Collection</h2>
      </div>

      {/* ✅ Active Filters */}
      <div className="p-4 flex gap-2 bg-white">
        {activeFilters.length > 0 && activeFilters.map((filter) => (
          <span key={filter} className="px-3 py-1 greenBackground text-white rounded-full font-bold">
            {filter}
          </span>
        ))}
      </div>

      {/* ✅ Mushroom List */}
      <div className="p-4 flex-grow bg-white">
        <FilterMushrooms searchQuery={searchQuery} filters={activeFilters} />
      </div>

      {/* ✅ NavBar stays here, but NOT in the filter page */}
      <NavBar activePage="home" />
    </div>
  );
}

