import Image from "next/image";
import CityMatcher from "./components/CityMatcher";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gray-100  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <CityMatcher/>
    </div>
  );
}
