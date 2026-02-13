export default function SelectedMushroomCard({ image, isToxic, matchPercentage }) {
  return (
    <div className="relative w-[320px] h-[320px] bg-white rounded-lg shadow-md p-3 flex flex-col items-center">
      
      {isToxic && (
        <div className="absolute top-[12px] left-3 flex items-center">
          <img src="/images/skull.png" className="w-5 h-5" alt="skull icon" />
        </div>
      )}

      <div className={`absolute top-2 left-12 ${isToxic ? "bg-red-500" : "bg-green-600"} text-white text-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm`}>
        {isToxic && <img src="/icons/icon_warning.svg" className="w-4 h-4" alt="warning icon" />}
        <span className="font-semibold">{matchPercentage ? `${matchPercentage}% Match` : "Match"}</span>
      </div>

      <div className="mt-6 w-[250px] h-[250px]">
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