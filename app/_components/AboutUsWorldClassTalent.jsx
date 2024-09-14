import ImageMobile from "@/public/about/mobile/image-world-class-talent.jpg";
import ImageTablet from "@/public/about/tablet/image-world-class-talent.jpg";
import ImageDesktop from "@/public/about/desktop/image-world-class-talent.jpg";

import Pattern from "@/public/shared/desktop/bg-pattern-three-circles.svg";
import AboutSplitSection from "./AboutSplitSection";

const WorldClassTalentData = {
  imageMobile: ImageMobile,
  imageTablet: ImageTablet,
  imageDesktop: ImageDesktop,
  patternMobile: Pattern,
  patternTablet: Pattern,
  patternDesktop: Pattern,
  fullWidthMobile: true,
  gridCols: "xl:grid-cols-[475px,1fr]",
  imageSize: "w-full h-[320px] xl:w-[475px] xl:h-[650px]",
  imageOrder: "",
  bgColor: "bg-beige",
  patternPositions:
    "top-0 left-0  md:left-[94px] md:top-auto md:bottom-[336px] xl:bottom-0 xl:left-[-146px]",
  patternSize: "h-[584px] w-[584px]",
  titleColor: "text-peach",
  title: "World-class talent",
  paragraph:
    "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
  paragraphColor: "text-black",
};

export default function AboutUsWorldClassTalent() {
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
