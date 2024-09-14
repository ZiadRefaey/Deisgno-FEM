import HeroMobile from "@/public/about/mobile/image-about-hero.jpg";
import HeroTablet from "@/public/about/tablet/image-about-hero.jpg";
import HeroDesktop from "@/public/about/desktop/image-about-hero.jpg";

import BgPatternMobile from "@/public/about/mobile/bg-pattern-hero-about-mobile-exported.svg";
import BgPatternDesktop from "@/public/about/desktop/bg-pattern-hero-about-desktop.svg";
import AboutSplitSection from "./AboutSplitSection";

const AboutUsHeaderData = {
  imageMobile: HeroMobile,
  imageTablet: HeroTablet,
  imageDesktop: HeroDesktop,
  patternMobile: BgPatternMobile,
  patternTablet: BgPatternDesktop,
  patternDesktop: BgPatternDesktop,
  fullWidthMobile: true,
  gridCols: "xl:grid-cols-[1fr,476px]",
  imageSize: "w-full h-[320px] xl:w-[475px] xl:h-full",
  imageOrder: "xl:order-2",
  bgColor: "bg-peach ",
  patternPositions:
    "top-[-50%] right-0 md:right-auto md:left-[-121px] md:top-auto md:bottom-[101.33px] xl:bottom-0 xl:left-0",
  patternSize: "h-[292px] w-[584px] md:h-[640px] md:w-[640px]",
  titleColor: "text-white",
  title: "About Us",
  paragraph:
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We&apos;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&apos;re always looking forward to creating brands, products, and digital experiences that connect with our clients&apos; audiences.",
  paragraphColor: "text-white",
};

export default function AboutUsHeader() {
  return (
    <AboutSplitSection
      imageMobile={AboutUsHeaderData.imageMobile}
      imageTablet={AboutUsHeaderData.imageTablet}
      imageDesktop={AboutUsHeaderData.imageDesktop}
      patternMobile={AboutUsHeaderData.patternMobile}
      patternTablet={AboutUsHeaderData.patternTablet}
      patternDesktop={AboutUsHeaderData.patternDesktop}
      fullWidthMobile={AboutUsHeaderData.fullWidthMobile}
      gridCols={AboutUsHeaderData.gridCols}
      imageSize={AboutUsHeaderData.imageSize}
      imageOrder={AboutUsHeaderData.imageOrder}
      bgColor={AboutUsHeaderData.bgColor}
      patternPositions={AboutUsHeaderData.patternPositions}
      patternSize={AboutUsHeaderData.patternSize}
      title={AboutUsHeaderData.title}
      titleColor={AboutUsHeaderData.titleColor}
      paragraph={AboutUsHeaderData.paragraph}
      paragraphColor={AboutUsHeaderData.paragraphColor}
    />
  );
}
