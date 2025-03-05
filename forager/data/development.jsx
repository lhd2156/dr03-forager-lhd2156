const dummyData = {
  message: "This is dummy data from a config file",
  status: "success",
};

const warningMessage = {
  header: "warning",
  icon: "/icons/icon_warning.svg",
  message: "This is a toxic species, proceed with caution."
};

export const mushrooms = [
{
  id: 1,
  name: "Death Cap",
  scientificName: "Amanita phalloides",
  image: "/images/deathcap.jpg",
  favorite: true,
  isToxic: true,
  regions: ["Texas"],
  categories: ["Poisonous"],
  fastFacts: { capDiameter: "5-15cm", gillColor: "White" }
},
{
  id: 2,
  name: "Paddy Straw",
  scientificName: "Volvariella volvacea",
  image: "/images/paddystraw.jpg",
  favorite: false,
  isToxic: false,
  matchPercentage: 90,
  regions: ["Asia"],
  categories: ["Medicinal"],
  fastFacts: { capDiameter: "4-10cm", gillColor: "Pink" }
},
{
  id: 3,
  name: "Destroying Angel",
  scientificName: "Amanita bisporigera",
  image: "/images/destroyingangel.jpg",
  favorite: true,
  isToxic: true,
  matchPercentage: 80,
  regions: ["North America"],
  categories: ["Poisonous"],
  fastFacts: { capDiameter: "5-10cm", gillColor: "White" }
},
{
  id: 4,
  name: "False Death Cap",
  scientificName: "Amanita citrina",
  image: "/images/false_deathcap.jpg",
  favorite: false,
  isToxic: true,
  matchPercentage: 70,
  regions: ["Europe"],
  categories: ["Mythical"],
  fastFacts: { capDiameter: "4-12cm", gillColor: "Cream" }
},
{
  id: 5,
  name: "Puffball",
  scientificName: "Lycoperdon perlatum",
  image: "/images/puffball.jpg",
  favorite: false,
  isToxic: false,
  matchPercentage: 60,
  regions: ["Africa"],
  categories: ["Good for Broths"],
  fastFacts: { capDiameter: "3-8cm", gillColor: "White" }
}
];

export const filterLists = [
  {
    category: "Tags",
    pills: [
      { label: "Favorites", isSelected: false },
      { label: "Recent", isSelected: false },
    ],
  },
  {
    category: "Regions",
    pills: [
      { label: "Texas", isSelected: false },
      { label: "North America", isSelected: false },
      { label: "South America", isSelected: false },
      { label: "Asia", isSelected: false },
      { label: "Europe", isSelected: false },
      { label: "Africa", isSelected: false },
    ],
  },
  {
    category: "Category",
    pills: [
      { label: "Poisonous", isSelected: false },
      { label: "Medicinal", isSelected: false },
      { label: "Mythical", isSelected: false },
      { label: "Good for Broths", isSelected: false },
    ],
  },
];

/**
* Function to filter mushrooms based on active filters
* @param {Array} filters - Active filters selected by the user
* @returns {Array} - Filtered list of mushrooms
*/
export function filterMushrooms(filters) {
  if (filters.length === 0) {
      return mushrooms; // Show all if no filters are active
  }

  return mushrooms.filter(mushroom =>
      filters.some(filter =>
          mushroom.regions.includes(filter) ||
          mushroom.categories.includes(filter) ||
          (filter === "Favorites" && mushroom.favorite)
      )
  );
}

// More than one export.
export { warningMessage, dummyData, mushrooms, filterLists }; 
