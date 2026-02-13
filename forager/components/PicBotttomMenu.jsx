"use client";
import { FaSyncAlt, FaImages } from "react-icons/fa";

export default function BottomMenu({ onCapture, flicker }) {
  return (
    <div className="w-full flex flex-col items-center bg-black bg-opacity-50 pb-3">
      <div className="w-full flex items-center justify-around py-3">
        <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
          <FaImages />
        </div>

        {/* Capture Button with iPhone-style flicker */}
        <div
          onClick={onCapture}
          className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center cursor-pointer relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-black rounded-full transition-opacity duration-150"
            style={{ opacity: flicker ? 0.8 : 0 }}
          />
          <div className="w-12 h-12 bg-white rounded-full" />
        </div>

        <div className="cursor-pointer flex justify-center items-center text-white text-2xl">
          <FaSyncAlt />
        </div>
      </div>
      <div className="w-20 h-1 bg-gray-300 rounded-full mt-2"></div>
    </div>
  );
}