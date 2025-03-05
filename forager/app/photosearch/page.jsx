import TopMenu from "@/components/PicTopMenu";
import CameraFrame from "@/components/CameraFrame";
import BottomMenu from "@/components/PicBotttomMenu";
import Image from "next/image";

export default function PhotoSearchPage() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/mushroom.png" alt="Mushroom Background" fill className="absolute inset-0 w-full h-full object-cover" />

      </div>

      {/* Components */}
      <TopMenu />
      <CameraFrame />

      {/* Fix: Properly space out the Bottom Menu */}
      <div className="absolute bottom-0 w-full">
        <BottomMenu />
      </div>
    </div>
  );
}