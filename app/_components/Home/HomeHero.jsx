import React from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import Hero from "@/public/home/desktop/image-hero-phone-copy.png";
import HeroPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";
import SectionWrapper from "../SectionWrapper";
export default function HomeHero() {
  return (
    <>
      <section className="mb-[120px] md:px-10 xl:p-0 xl:max-w-[1111px] m-auto">
        <div className="w-full relative bg-peach px-6 md:px-[58px] xl:px-[95px] flex flex-col items-center justify-start xl:flex-row gap-20 pt-20 max-h-[843px] xl:max-h-[640px] overflow-hidden m-auto md:rounded-[15px]">
          <div className="flex items-center justify-center flex-col text-center xl:items-start xl:text-start relative z-20 md:max-w-[573px]">
            <h1 className="text-MobileHeadingL md:text-headingL">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-MobileBody md:text-body mt-[14px] mb-6 xl:mt-6 xl:mb-10">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <PrimaryButton variant={"light"}>LEARN MORE</PrimaryButton>
          </div>
          <Image
            className="rounded-[36px] shadow-hero-image relative z-10 xl:mt-[102px]"
            src={Hero}
            alt="image"
          />
          <div className=" absolute top-[102px] w-[640px] h-[640px] -right-[265px] md:-right-[121px] xl:right-0 xl:top-0 z-0">
            <Image
              src={HeroPattern}
              alt="Hero Pattern"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
