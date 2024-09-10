import React from "react";
import Image from "next/image";
export default function ProjectCard({ title, subtitle, image }) {
  return (
    <div className=" rounded-[15px] grid grid-cols-1 md:grid-cols-[339px,1fr] xl:grid-cols-1 overflow-hidden max-w-[327px] md:max-w-full xl:max-w-[350px] self-center group cursor-pointer">
      <div className="w-full h-[320px] md:w-[339px] md:h-[310px] xl:w-[350px] xl:h-[320px] relative ">
        <Image
          fill
          alt={`${title}'s image`}
          className={"w-full h-full object-cover"}
          src={image}
        />
      </div>
      <div className="bg-beige px-[30px] py-8 md:px-[40px] xl:px-8 w-full text-center flex items-center justify-center flex-col h-full group-hover:bg-peach transition-all duration-300 ">
        <p className="text-[20px] font-medium leading-[1.625rem] tracking-[5px] mb-4 text-peach group-hover:text-white transition-all duration-300 ">
          {title}
        </p>
        <p className="text-body text-black max-w-[268px] group-hover:text-white transition-all duration-300">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
