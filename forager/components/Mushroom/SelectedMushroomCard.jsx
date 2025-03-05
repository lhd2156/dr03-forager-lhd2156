export default function SelectedMushroomCard({ image, isToxic }) {
  return (
    <div className="relative w-[320px] h-[320px] bg-white rounded-lg shadow-md p-3 flex flex-col items-center">
      
      {/* Skull Icon - Properly Shrunk */}
      <div className="absolute top-[12px] left-3 flex items-center">
        <img src="/images/skull.png" className="w-5 h-5" alt="skull icon" />
      </div>

      {/* Match Badge - Properly Scaled */}
      <div className="absolute top-2 left-12 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
        <img src="/icons/icon_warning.svg" className="w-4 h-4" alt="warning icon" />
        <span className="font-semibold">97% Match</span>
      </div>

      {/* Mushroom Image - Shrunk Slightly */}
      <div className="mt-6 w-[250px] h-[250px]"> {/* Reduced from 280px → 250px */}
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image || "/images/deathcap.jpg"}
          alt="Mushroom"
          onError={(e) => (e.target.src = "/images/default.jpg")}
        />
      </div>
    </div>
  );
}
