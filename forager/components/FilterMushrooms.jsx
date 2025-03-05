import React from "react";
import { mushrooms } from "@/data/development";
import MushroomCard from "@/components/Mushroom/MushroomCard";

export default function FilterMushrooms({ searchQuery, filters }) {
  // Convert search query to lowercase for case-insensitive matching
  const lowercasedQuery = searchQuery.toLowerCase();

  // Filter mushrooms based on active filters and search query
  const filteredMushrooms = mushrooms.filter((mushroom) => {
    // Check if it matches the active filters
    const matchesFilter =
      filters.length === 0 || // If no filters are selected, show all
      (filters.includes("Favorites") && mushroom.favorite) ||
      (filters.includes("Texas") && mushroom.favorite);

    // Check if the name matches the search query
    const matchesSearch =
      lowercasedQuery === "" ||
      mushroom.name.toLowerCase().includes(lowercasedQuery) ||
      mushroom.scientificName.toLowerCase().includes(lowercasedQuery);

    return matchesFilter && matchesSearch; // Must match both
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredMushrooms.length > 0 ? (
        filteredMushrooms.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            image={mushroom.image}
            name={mushroom.name}
            isToxic={mushroom.isToxic}
          />
        ))
      ) : (
        <p className="text-gray-500 col-span-2 text-center">No mushrooms found.</p>
      )}
    </div>
  );
}
