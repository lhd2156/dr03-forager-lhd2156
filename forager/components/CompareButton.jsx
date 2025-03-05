"use client";
import { useRouter } from "next/navigation";

export default function CompareButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/comparison")} // Navigate to /comparison page
      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-bold shadow hover:bg-gray-400 transition"
    >
      Compare
    </button>
  );
}
