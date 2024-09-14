import AboutSplitSection from "./AboutSplitSection";

import ImageMobile from "@/public/about/mobile/image-real-deal.jpg";
import ImageTablet from "@/public/about/tablet/image-real-deal.jpg";
import ImageDesktop from "@/public/about/desktop/image-real-deal.jpg";

import Pattern from "@/public/shared/desktop/bg-pattern-three-circles.svg";

const WorldClassTalentData = {
  imageMobile: ImageMobile,
  imageTablet: ImageTablet,
  imageDesktop: ImageDesktop,
  patternMobile: Pattern,
  patternTablet: Pattern,
  patternDesktop: Pattern,
  fullWidthMobile: true,
  gridCols: "xl:grid-cols-[1fr,475px]",
  imageSize: "w-full h-[320px] xl:w-[475px] xl:h-[650px]",
  imageOrder: "xl:order-2",
  bgColor: "bg-beige",
  patternPositions:
    "top-0 left-0  md:left-[94px] md:top-auto md:bottom-[44px] xl:bottom-0 xl:left-0",
  patternSize: "h-[584px] w-[584px]",
  titleColor: "text-peach",
  title: "The real deal",
  paragraph:
    "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  paragraphColor: "text-black",
};

export default function AboutUsTheRealDealSection() {
  return (
    <AboutSplitSection
      imageMobile={WorldClassTalentData.imageMobile}
      imageTablet={WorldClassTalentData.imageTablet}
      imageDesktop={WorldClassTalentData.imageDesktop}
      patternMobile={WorldClassTalentData.patternMobile}
      patternTablet={WorldClassTalentData.patternTablet}
      patternDesktop={WorldClassTalentData.patternDesktop}
      fullWidthMobile={WorldClassTalentData.fullWidthMobile}
      gridCols={WorldClassTalentData.gridCols}
      imageSize={WorldClassTalentData.imageSize}
      imageOrder={WorldClassTalentData.imageOrder}
      bgColor={WorldClassTalentData.bgColor}
      patternPositions={WorldClassTalentData.patternPositions}
      patternSize={WorldClassTalentData.patternSize}
      title={WorldClassTalentData.title}
      titleColor={WorldClassTalentData.titleColor}
      paragraph={WorldClassTalentData.paragraph}
      paragraphColor={WorldClassTalentData.paragraphColor}
    />
  );
}
