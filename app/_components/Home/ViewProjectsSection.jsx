import React from "react";
import SectionWrapper from "../SectionWrapper";
import ViewProjectCard from "./ViewProjectCard";

import DesktopImageAppDesign from "@/public/home/desktop/image-app-design.jpg";
import TabletImageAppDesign from "@/public/home/tablet/image-app-design.jpg";
import MobileImageAppDesign from "@/public/home/mobile/image-app-design.jpg";

import MobileImageGraphicDesign from "@/public/home/mobile/image-graphic-design.jpg";
import TabletImageGraphicDesign from "@/public/home/tablet/image-graphic-design.jpg";
import DesktopImageGraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";

import DesktopImageWebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import TabletImageWebDesign from "@/public/home/tablet/image-web-design.jpg";
import MobileImageWebDesign from "@/public/home/mobile/image-web-design.jpg";

export default function ViewProjectsSection() {
  return (
    <SectionWrapper
      className={
        "grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-[30px] gap-y-6"
      }
    >
      <ViewProjectCard
        mobileImage={MobileImageWebDesign}
        tabletImage={TabletImageWebDesign}
        desktopImage={DesktopImageWebDesign}
        title={"web design"}
        className={
          "w-full  h-[250px] md:h-[200px] xl:h-full relative xl:row-span-2"
        }
      />

      <ViewProjectCard
        mobileImage={MobileImageAppDesign}
        tabletImage={TabletImageAppDesign}
        desktopImage={DesktopImageAppDesign}
        title={"app design"}
        className={"w-full h-[250px] md:h-[200px] xl:h-[308px] relative"}
      />

      <ViewProjectCard
        mobileImage={MobileImageGraphicDesign}
        tabletImage={TabletImageGraphicDesign}
        desktopImage={DesktopImageGraphicDesign}
        title={"graphic design"}
        className={"w-full h-[250px] md:h-[200px] xl:h-[308px] relative"}
      />
    </SectionWrapper>
  );
}
