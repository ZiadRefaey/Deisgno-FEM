import React from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 max-w-[327px] self-center md:max-w-full xl:grid-cols-3 gap-y-10 md:gap-y-8 xl:gap-x-[30px] ">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            key={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
