import FastFacts from "@/components/Mushroom/FastFacts";
import MushroomDescription from "@/components/Mushroom/MushroomDescription";

export default function MushroomDetails({ name, scientificName, fastFacts }) {
  return (
    <div className="w-full max-w-[320px] mx-auto mt-4">
      {/* Title, Scientific Name, and Add Button */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <button className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md text-lg">
            +
          </button>
        </div>
        {/* Scientific Name */}
        <p className="text-sm italic text-gray-600 mt-1">{scientificName}</p>
      </div>

      {/* Fast Facts - Reduced Padding & Margins */}
      <div className="bg-[#804A4A] text-white p-2 rounded-lg shadow-md mb-2 text-sm">
        <h3 className="text-base font-bold mb-1">Fast Facts</h3>
        <FastFacts data={fastFacts} />
      </div>

      {/* Mushroom Description */}
      <div className="text-xs">
        <MushroomDescription />
      </div>
    </div>
  );
}