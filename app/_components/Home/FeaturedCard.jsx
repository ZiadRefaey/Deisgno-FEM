import HeroPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";

import Image from "next/image";

export default function FeaturedCard({
  illustraion,
  title,
  paragraph,
  rotation,
  dimensions,
}) {
  return (
    <div className="flex flex-col gap-12 md:flex-row xl:flex-col items-center justify-center">
      <div className="relative flex items-center justify-center w-[202px] h-[202px]">
        <div className={`relative ${dimensions}`}>
          <Image
            src={illustraion}
            alt={`${title}'s illustration`}
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full -z-10 ${rotation}`}
        >
          <Image src={HeroPattern} className="w-full h-full" alt="pattern" />
        </div>
      </div>
      <div className="text-black text-center md:text-start xl:text-center">
        {" "}
        <p className="text-headingS uppercase mb-8 md:mb-4 xl:mb-8">{title}</p>
        <p className="text-body">{paragraph}</p>
      </div>
    </div>
  );
}
