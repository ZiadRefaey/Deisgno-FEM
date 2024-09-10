import React from "react";
import ViewProjectCard from "./Home/ViewProjectCard";

import GraphicDesignImgMobile from "@/public/home/mobile/image-graphic-design.jpg";
import GraphicDesignImgTablet from "@/public/home/tablet/image-graphic-design.jpg";
import GraphicDesignImgDesktop from "@/public/home/mobile/image-graphic-design.jpg";

import AppDesignImgMobile from "@/public/home/mobile/image-app-design.jpg";
import AppDesignImgTablet from "@/public/home/tablet/image-app-design.jpg";
import AppDesignImgDesktop from "@/public/home/mobile/image-app-design.jpg";
import SectionWrapper from "./SectionWrapper";

export default function DesignPagesList({ designPages }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-[327px] md:grid-cols-1 items-center justify-center xl:grid-cols-2 gap-6 xl:gap-[30px] ">
        {designPages.map((designPage, index) => (
          <ViewProjectCard
            key={index}
            desktopImage={designPage.desktopImage}
            tabletImage={designPage.tabletImage}
            mobileImage={designPage.mobileImage}
            title={designPage.title}
            href={designPage.href}
            className={
              "w-[327px] h-[250px] md:w-full md:h-[200px] xl:h-[308px] relative self-center"
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
