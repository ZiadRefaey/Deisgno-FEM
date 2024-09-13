import React from "react";
import SectionWrapper from "./SectionWrapper";
import ResponsiveImage from "./ResponsiveImage";

export default function AboutSplitSection({
  imageMobile,
  imageTablet,
  imageDesktop,
  patternMobile,
  patternTablet,
  patternDesktop,
  imageWdith,
  fullWidthMobile,
  imageSize,
  imageOrder,
  bgColor,
  patternPositions,
  patternSize,
  titleColor,
  title,
  paragraph,
  paragraphColor,
}) {
  return (
    <SectionWrapper
      className={`grid grid-cols-1 xl:grid-cols-[1fr,${imageWdith}px] md:rounded-[15px] overflow-hidden`}
      fullWidthMobile={fullWidthMobile}
    >
      <div className={`relative ${imageSize} ${imageOrder}`}>
        <ResponsiveImage
          className={"w-full h-full object-cover"}
          mobileImage={imageMobile}
          tabletImage={imageTablet}
          desktopImage={imageDesktop}
        />
      </div>
      <div
        className={`px-6 py-20 relative ${bgColor} text-white text-center xl:text-start md:px-[58px] md:py-[64px] xl:py-[135px] xl:px-[95px] overflow-hidden`}
      >
        <div className={`absolute ${patternSize} ${patternPositions}`}>
          <ResponsiveImage
            className={"w-full h-full object-contain"}
            mobileImage={patternMobile}
            tabletImage={patternTablet}
            desktopImage={patternDesktop}
          />
        </div>
        <h1
          className={`text-MobileHeadingL md:text-headingL mb-6 md:mb-8 relative z-20 ${titleColor}`}
        >
          {title}
        </h1>
        <p
          className={`text-MobileBody md:text-body relative z-20 ${paragraphColor}`}
        >
          {paragraph}
        </p>
      </div>
    </SectionWrapper>
  );
}
