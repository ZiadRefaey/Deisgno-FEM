import bgPatternMobile from "@/public/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import bgPatternTablet from "@/public/shared/tablet/bg-pattern-design-pages-intro-tablet.svg";
import ResponsiveImage from "./ResponsiveImage";
export default function DesignPagesHeader({ title, subtitle }) {
  return (
    <header className="mb-[120px] md:px-10 xl:p-0 xl:max-w-[1111px] m-auto">
      <div className="w-full relative bg-peach py-[105px] md:py-[64px] flex flex-col items-center justify-center gap-6 overflow-hidden m-auto md:rounded-[15px] px-6">
        <h1 className="text-MobileHeadingL md:text-headingL relative z-20">
          {title}
        </h1>
        <p className="text-MobileBody md:text-body relative z-20 text-center max-w-[400px]">
          {subtitle}
        </p>
        <div className="w-[876px] h-[584px] absolute top-0 right-0 md:-top-[166px] md:-right-[166px] xl:right-0">
          <ResponsiveImage
            className={"object-cover w-full h-full"}
            mobileImage={bgPatternMobile}
            tabletImage={bgPatternTablet}
            desktopImage={bgPatternTablet}
          />
        </div>
      </div>
    </header>
  );
}
