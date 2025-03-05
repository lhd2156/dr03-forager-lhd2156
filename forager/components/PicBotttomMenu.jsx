import { FaSyncAlt, FaCamera, FaImages } from "react-icons/fa";

export default function BottomMenu() {
  return (
    <div className="w-full flex flex-col items-center bg-black bg-opacity-50 pb-3">
      {/* Bottom Icons */}
      <div className="w-full flex items-center justify-around py-3">
        {/* Gallery Icon */}
        <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
          <FaImages />
        </div>

        {/* Capture Button */}
        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-full cursor-pointer" />
        </div>

        {/* Flip Camera Icon */}
        <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
          <FaSyncAlt />
        </div>
      </div>

      {/* Separator Line - Now Below the Capture Button */}
      <div className="w-20 h-1 bg-gray-300 rounded-full mt-2"></div>
    </div>
  );
}
