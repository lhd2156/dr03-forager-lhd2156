"use client";
import { useState } from "react";
import TopMenu from "@/components/PicTopMenu";
import CameraFrame from "@/components/CameraFrame";
import BottomMenu from "@/components/PicBotttomMenu";
import Image from "next/image";

export default function PhotoSearchPage() {
  const [flicker, setFlicker] = useState(false);

  const handleCapture = () => {
    setFlicker(true);
    setTimeout(() => setFlicker(false), 700);
  };

  return (
      <div className="relative w-full h-[844px] flex flex-col overflow-hidden" style={{ backgroundColor: 'black' }}>      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/mushroom.png" alt="Mushroom Background" fill className="object-cover" />
      </div>

      <TopMenu />

      <div
        className="absolute left-0 right-0 pointer-events-none z-30"
        style={{ 
          backgroundColor: 'black',
          opacity: flicker ? 1 : 0,
          transition: 'opacity 0.7s ease',
          top: '85px',
          bottom: '110px'
        }}
      />

      <CameraFrame />

      <div className="absolute bottom-0 w-full">
        <BottomMenu onCapture={handleCapture} flicker={flicker} />
      </div>
    </div>
  );
}