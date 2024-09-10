import Image from "next/image";
import ResponsiveImage from "./ResponsiveImage";
import BgPattern from "@/public/shared/desktop/bg-pattern-three-circles.svg";

export default function LocationCard({
  location,
  MobileImage,
  TabletImage,
  office,
  address,
  email,
  phoneNumber,
  reverse = false,
}) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center md:gap-8 mb-10 md:mb-[120px] xl:mb-8 ${
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <div className="w-full h-[320px] md:h-[326px] relative md:rounded-[15px] overflow-hidden xl:w-[350px]">
        <ResponsiveImage
          alt={`${location}'s map image`}
          className={"w-full h-full object-cover"}
          desktopImage={MobileImage}
          mobileImage={MobileImage}
          tabletImage={TabletImage}
        />
      </div>
      <div className="px-6 py-20 md:px-[75px] md:py-[88px] bg-beige flex flex-col gap-6 items-center justify-center min-w-full md:rounded-[15px] xl:min-w-0 xl:flex-1 relative overflow-hidden">
        <p className="text-MobileHeadingL md:text-headingL text-center text-peach md:text-start w-full relative z-20">
          {location}
        </p>

        <div className="flex flex-col items-center justify-center md:flex-row md:items-start w-full md:justify-between text-center md:text-start relative z-20 gap-6">
          <div className="text-black w-full flex flex-col items-center justify-center md:items-start">
            <p className="text-[0.9375rem] md:text-[1rem] leading-[1.625rem] font-bold ">
              {office}
            </p>
            <p className="text-MobileBody md:text-body max-w-[174px]">
              {address}
            </p>
          </div>

          <div className="text-black w-full">
            <p className="text-[0.9375rem] md:text-[1rem] leading-[1.625rem] font-bold">
              Contact
            </p>
            <p className="text-MobileBody md:text-body"> P : {phoneNumber}</p>
            <p className="text-MobileBody md:text-body">M : {email}</p>
          </div>
        </div>

        <div className="absolute w-[584px] h-[584px] z-0 top-0 left-0 md:bottom-0 md:top-auto">
          <Image
            src={BgPattern}
            fill
            alt="bg pattern"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
