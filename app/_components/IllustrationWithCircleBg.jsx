import Image from "next/image";
import HeroPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";

export default function IllustrationWithCircleBg({
  dimensions,
  rotation,
  illustraion,
  alt,
}) {
  return (
    <div className="relative flex items-center justify-center w-[202px] h-[202px]">
      <div className={`relative ${dimensions}`}>
        <Image
          src={illustraion}
          alt={`${alt}'s illustration`}
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className={`absolute top-0 left-0 w-full h-full -z-10 ${rotation}`}>
        <Image src={HeroPattern} className="w-full h-full" alt="pattern" />
      </div>
    </div>
  );
}
