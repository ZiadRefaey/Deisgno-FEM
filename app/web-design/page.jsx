import React from "react";
import DesignPagesHeader from "../_components/DesignPagesHeader";

import ImageExpress from "@/public/web-design/desktop/image-express.jpg";
import ImageTransfer from "@/public/web-design/desktop/image-transfer.jpg";
import ImagePhoton from "@/public/web-design/desktop/image-photon.jpg";
import ImageBuilder from "@/public/web-design/desktop/image-builder.jpg";
import ImageBlogr from "@/public/web-design/desktop/image-blogr.jpg";
import ImageCamp from "@/public/web-design/desktop/image-camp.jpg";
import ProjectsList from "../_components/ProjectsList";

const WebDesignProjects = [
  {
    title: "Express",
    subtitle: "A multi-carrier shipping website for ecommerce businesses",
    image: ImageExpress,
  },
  {
    title: "TRANSFER",
    subtitle:
      "Site for low-cost money transfers and sending money within seconds",
    image: ImageTransfer,
  },
  {
    title: "PHOTON",
    subtitle:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: ImagePhoton,
  },
  {
    title: "BUILDER",
    subtitle: "Connects users with local contractors based on their location",
    image: ImageBuilder,
  },
  {
    title: "BLOGR",
    subtitle: "Blogr is a platform for creating an online blog or publication",
    image: ImageBlogr,
  },
  {
    title: "CAMP",
    subtitle:
      "Get expert training in coding, data, design, and digital marketing",
    image: ImageCamp,
  },
];
export default function WebDesign() {
  return (
    <>
      <DesignPagesHeader
        title={"Web Design"}
        subtitle={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <ProjectsList projects={WebDesignProjects} />
    </>
  );
}
