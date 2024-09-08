import IllustrationFriendly from "@/public/home/desktop/illustration-friendly.svg";
import IllustrationPassionate from "@/public/home/desktop/illustration-passionate.svg";
import IllustrationResourceful from "@/public/home/desktop/illustration-resourceful.svg";
import BgPatternLeaf from "@/public/shared/desktop/bg-pattern-leaf.svg";

import FeaturedCard from "./FeaturedCard";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
const FeaturesList = [
  {
    illustration: IllustrationPassionate,
    title: "PASSIONATE",
    paragraph:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    dimensions: "w-[188px] h-[162px]",
    rotation: "-rotate-45",
  },
  {
    illustration: IllustrationResourceful,
    title: "RESOURCEFUL",
    paragraph:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    dimensions: "w-[184px] h-[162px]",
    rotation: "rotate-180",
  },

  {
    illustration: IllustrationFriendly,
    title: "FRIENDLY",
    paragraph:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    dimensions: "w-[201px] h-[128px]",
    rotation: "rotate-0",
  },
];
export default function HomeFeaturesSection() {
  return (
    <SectionWrapper className="relative flex flex-col items-center justify-center gap-20 md:gap-8 xl:gap-[30px] xl:flex-row">
      <div className="absolute top-0  w-[99vw] h-full -z-20 hidden xl:block">
        <Image
          src={BgPatternLeaf}
          alt="Leaf Pattern"
          className="absolute right-0 top-[124px] rotate-180"
        ></Image>
      </div>
      {FeaturesList.map((feature, index) => (
        <FeaturedCard
          key={index}
          illustraion={feature.illustration}
          title={feature.title}
          paragraph={feature.paragraph}
          dimensions={feature.dimensions}
          rotation={feature.rotation}
        />
      ))}{" "}
    </SectionWrapper>
  );
}
