import React from "react";
import DesignPagesHeader from "../_components/DesignPagesHeader";

import ImageBoxedWater from "@/public/graphic-design/desktop/image-boxed-water.jpg";
import ImageChange from "@/public/graphic-design/desktop/image-change.jpg";
import ImageScience from "@/public/graphic-design/desktop/image-science.jpg";

import WebDesignImgMobile from "@/public/home/mobile/image-web-design.jpg";
import WebDesignImgTablet from "@/public/home/tablet/image-web-design.jpg";
import WebDesignImgDesktop from "@/public/home/desktop/image-web-design-small.jpg";

import AppDesignImgMobile from "@/public/home/mobile/image-app-design.jpg";
import AppDesignImgTablet from "@/public/home/tablet/image-app-design.jpg";
import AppDesignImgDesktop from "@/public/home/desktop/image-app-design.jpg";

import ProjectsList from "../_components/ProjectsList";
import DesignPagesList from "../_components/DesignPagesList";

const GraphicDesignProjects = [
  {
    title: "TIM BROWN",
    subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: ImageChange,
  },
  {
    title: "BOXED WATER",
    subtitle: "A simple packaging concept made for Boxed Water",
    image: ImageBoxedWater,
  },
  {
    title: "SCIENCE!",
    subtitle: "A poster made in collaboration with the Federal Art Project",
    image: ImageScience,
  },
];
const designPages = [
  {
    desktopImage: AppDesignImgDesktop,
    tabletImage: AppDesignImgTablet,
    mobileImage: AppDesignImgMobile,
    title: "App Design",
    href: "/app-design",
  },
  {
    desktopImage: WebDesignImgDesktop,
    tabletImage: WebDesignImgTablet,
    mobileImage: WebDesignImgMobile,
    title: "Web Design",
    href: "/web-design",
  },
];
export default function GraphicDesign() {
  return (
    <>
      <DesignPagesHeader
        title={"Web Design"}
        subtitle={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <ProjectsList projects={GraphicDesignProjects} />
      <DesignPagesList designPages={designPages} />
    </>
  );
}
