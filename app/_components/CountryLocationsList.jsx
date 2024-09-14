import CanadaIllustration from "@/public/shared/desktop/illustration-canada.svg";
import AustraliaIllustration from "@/public/shared/desktop/illustration-australia.svg";
import UKIllustration from "@/public/shared/desktop/illustration-united-kingdom.svg";
import CountryLocationCard from "./CountryLocationCard";
import SectionWrapper from "./SectionWrapper";

const LocationsList = [
  {
    title: "Canada",
    illustration: CanadaIllustration,
    rotation: "rotate-0",
    dimensions: "w-[182px] h-[143px]",
  },
  {
    title: "Australia",
    illustration: AustraliaIllustration,
    rotation: "-rotate-45",
    dimensions: "w-[182px] h-[93px]",
  },
  {
    title: "United Kingdom",
    illustration: UKIllustration,
    rotation: "rotate-180",
    dimensions: "w-[181px] h-[108px]",
  },
];
export default function CountryLocationsList() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center gap-12 md:gap-20 xl:flex-row xl:gap-0 xl:justify-between">
      {LocationsList.map((Location) => (
        <CountryLocationCard
          key={Location.title}
          title={Location.title}
          rotation={Location.rotation}
          dimensions={Location.dimensions}
          illustration={Location.illustration}
        />
      ))}
    </SectionWrapper>
  );
}
