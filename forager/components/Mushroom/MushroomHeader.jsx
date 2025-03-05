export default function MushroomHeader({ className = "" }) {
  return (
    <div
      className={`w-full px-4 py-2 shadow-md flex items-center greenBackground text-white relative ${className}`}
    >
      {/* Back Button */}
      <button
        onClick={() => window.history.back()} // Or replace with custom back navigation logic
        className="text-white text-sm font-semibold absolute left-4"
      >
        &larr;
      </button>

      {/* Page Title */}
      <h1 className="text-lg font-bold w-full text-center">
        Match Results
      </h1>
    </div>
  );
}