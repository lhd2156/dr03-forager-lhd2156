"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CompareButtonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <button
      onClick={() => router.push(`/comparison?id=${id}`)}
      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-bold shadow hover:bg-gray-400 transition"
    >
      Compare
    </button>
  );
}

export default function CompareButton() {
  return (
    <Suspense fallback={<button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-bold">Compare</button>}>
      <CompareButtonContent />
    </Suspense>
  );
}