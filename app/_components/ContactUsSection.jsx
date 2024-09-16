import MobilePattern from "@/public/contact/mobile/bg-pattern-hero-contact-mobile-exported.svg";
import DesktopPattern from "@/public/contact/desktop/bg-pattern-hero-desktop.svg";

import SectionWrapper from "./SectionWrapper";
import ResponsiveImage from "./ResponsiveImage";
import ContactForm from "./ContactForm";

export default function ContactUsSection() {
  return (
    <SectionWrapper
      fullWidthMobile={true}
      className={
        "bg-peach md:rounded-[15px] relative px-6 py-[72px] md:px-[58px] xl:px-[95px] xl:py-[55px] flex flex-col items-center justify-center xl:flex-row gap-12 xl:gap-[95px] overflow-hidden"
      }
    >
      <div className="w-[584px] h-[292px] md:w-[640px] md:h-[640px] absolute top-0 z-10 xl:w-[540px] md:top-[-83px] md:left-[-121px] xl:top-[-160px] xl:left-0">
        <ResponsiveImage
          mobileImage={MobilePattern}
          tabletImage={DesktopPattern}
          desktopImage={DesktopPattern}
          className={"w-full h-full object-contain"}
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-8 text-center md:text-start items-center justify-center md:items-start relative z-20">
        <h1 className="text-MobileHeadingL md:text-headingL">Contact Us</h1>
        <p className="text-MobileBody md:text-body xl:w-[445px]">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <ContactForm />
    </SectionWrapper>
  );
}
