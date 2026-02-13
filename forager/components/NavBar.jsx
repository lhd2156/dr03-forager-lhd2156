"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { TbMushroom } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [lastMushroomId, setLastMushroomId] = useState(1);

  useEffect(() => {
    const stored = sessionStorage.getItem("lastMushroomId");
    if (stored) setLastMushroomId(stored);
  }, [pathname]);

  if (pathname === "/filter" || pathname === "/photosearch") return null;

  return (
    <div className={styles.navbar}>
      <Link href={`/mushroom?id=${lastMushroomId}`}>
        <TbMushroom className="text-white text-2xl" />
      </Link>

      <div className="relative flex flex-col items-center">
        <Link href="/">
          <FaHome className="text-white text-3xl mb-1" />
        </Link>
        <button
          className="w-24 h-2 bg-gray-400 rounded-full mt-2"
          onClick={() => router.push("/filter")}
        ></button>
      </div>

      <Link href="/photosearch">
        <FaCamera className="text-white text-2xl" />
      </Link>
    </div>
  );
}