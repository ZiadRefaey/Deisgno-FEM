import React from "react";
import DesignPagesHeader from "../_components/DesignPagesHeader";

import ImageAirfilter from "@/public/app-design/desktop/image-airfilter.jpg";
import ImageEyecam from "@/public/app-design/desktop/image-eyecam.jpg";
import ImageFaceit from "@/public/app-design/desktop/image-faceit.jpg";
import ImageTodo from "@/public/app-design/desktop/image-todo.jpg";
import ImageLoopstudios from "@/public/app-design/desktop/image-loopstudios.jpg";

import GraphicDesignImgMobile from "@/public/home/mobile/image-graphic-design.jpg";
import GraphicDesignImgTablet from "@/public/home/tablet/image-graphic-design.jpg";
import GraphicDesignImgDesktop from "@/public/home/desktop/image-graphic-design.jpg";

import WebDesignImgMobile from "@/public/home/mobile/image-web-design.jpg";
import WebDesignImgTablet from "@/public/home/tablet/image-web-design.jpg";
import WebDesignImgDesktop from "@/public/home/desktop/image-web-design-small.jpg";

import ProjectsList from "../_components/ProjectsList";
import DesignPagesList from "../_components/DesignPagesList";

const AppDesignProjects = [
  {
    title: "AIRFILTER",
    subtitle:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: ImageAirfilter,
  },
  {
    title: "EYECAM",
    subtitle:
      "Product that lets you edit your favorite photos and videos at any time",
    image: ImageEyecam,
  },
  {
    title: "FACEIT",
    subtitle:
      "Get to meet your favorite internet superstar with the faceit app",
    image: ImageFaceit,
  },
  {
    title: "TODO",
    subtitle: "A todo app that features cloud sync with light and dark mode",
    image: ImageTodo,
  },
  {
    title: "LOOPSTUDIOS",
    subtitle: "A VR experience app made for Loopstudios",
    image: ImageLoopstudios,
  },
];
const designPages = [
  {
    desktopImage: WebDesignImgDesktop,
    tabletImage: WebDesignImgTablet,
    mobileImage: WebDesignImgMobile,
    title: "Web Design",
    href: "/web-design",
  },
  {
    desktopImage: GraphicDesignImgDesktop,
    tabletImage: GraphicDesignImgTablet,
    mobileImage: GraphicDesignImgMobile,
    title: "Graphic Design",
    href: "/graphic-design",
  },
];
export default function AppDesign() {
  return (
    <>
      <DesignPagesHeader
        title={"App Design"}
        subtitle={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <ProjectsList projects={AppDesignProjects} />
      <DesignPagesList designPages={designPages} />
    </>
  );
}
