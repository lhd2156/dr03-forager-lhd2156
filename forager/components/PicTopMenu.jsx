import { FaArrowLeft, FaBolt } from "react-icons/fa";
import Link from "next/link";

export default function TopMenu() {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black bg-opacity-50 z-50">
      {/* Fully Clickable Back Button */}
      <Link href="/" passHref>
        <button className="flex items-center justify-center p-3 text-white text-3xl cursor-pointer focus:outline-none">
          <FaArrowLeft />
        </button>
      </Link>

      {/* Flash Icon */}
      <div className="flex items-center justify-center p-3 text-white text-2xl cursor-pointer">
        <FaBolt />
      </div>
    </div>
  );
}
