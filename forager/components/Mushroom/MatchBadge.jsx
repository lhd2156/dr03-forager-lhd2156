export default function MatchBadge() {
  return (
    <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2 shadow-md">
      <img src="/icons/skull.svg" className="w-5 h-5" alt="skull icon" />
      <img src="/icons/icon_warning.svg" className="w-5 h-5" alt="warning icon" />
      <span className="font-semibold">97% Match</span>
    </div>
  );
}
