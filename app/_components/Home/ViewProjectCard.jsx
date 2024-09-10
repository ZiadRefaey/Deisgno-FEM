import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import ResponsiveImage from "../ResponsiveImage";
import Link from "next/link";

export default function ViewProjectCard({
  desktopImage,
  tabletImage,
  mobileImage,
  className,
  title,
  href = "/",
}) {
  return (
    <div className={`${className}`}>
      <ResponsiveImage
        desktopImage={desktopImage}
        tabletImage={tabletImage}
        mobileImage={mobileImage}
        alt={`${title}'s image`}
        className={"w-full h-full object-cover rounded-[15px]"}
      />
      <Link
        href={href}
        className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-[15px] flex flex-col items-center justify-center gap-6 hover:bg-peach/60 transition-all duration-300 cursor-pointer"
      >
        <p className="text-MobileHeadingM md:text-headingM uppercase">
          {title}
        </p>

        <div className="flex items-center justify-center">
          <p className="text-[15px] font-medium tracking-[5px] uppercase mr-4">
            view projects
          </p>
          <FaChevronRight className="w-2 h-3 text-peach" />
        </div>
      </Link>
    </div>
  );
}
