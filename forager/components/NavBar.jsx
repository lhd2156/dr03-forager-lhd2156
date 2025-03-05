"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // ✅ Import both hooks
import { FaHome } from "react-icons/fa";
import { TbMushroom } from "react-icons/tb";
import { FaCamera } from "react-icons/fa"; // ✅ Camera icon
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname(); // ✅ Get current path
  const router = useRouter(); // ✅ Get router instance

  // ✅ If on the filter or photo search page, do not render the NavBar
  if (pathname === "/filter" || pathname === "/photosearch") return null;

  return (
    <div className={styles.navbar}>
      {/* Mushrooms Page Link - Now links to /mushroom?id=1 */}
      <Link href="/mushroom?id=1">
        <TbMushroom className="text-white text-2xl" />
      </Link>

      {/* Home Icon with Filter Button Below */}
      <div className="relative flex flex-col items-center">
        <Link href="/">
          <FaHome className="text-white text-3xl mb-1" />
        </Link>

        {/* Clickable Filter Button BELOW the Home Icon */}
        <button
          className="w-24 h-2 bg-gray-400 rounded-full mt-2"
          onClick={() => router.push("/filter")} // Navigates to /filter
        ></button>
      </div>

      {/* Camera Page Link */}
      <Link href="/photosearch">
        <FaCamera className="text-white text-2xl" />
      </Link>
    </div>
  );
}
