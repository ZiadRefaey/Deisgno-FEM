import BgPattern from "@/public/shared/desktop/bg-pattern-call-to-action.svg";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import Logo from "./Logo";

import Facebook from "@/public/shared/desktop/icon-facebook.svg";
import Youtube from "@/public/shared/desktop/icon-youtube.svg";
import Twitter from "@/public/shared/desktop/icon-twitter.svg";
import Pinterest from "@/public/shared/desktop/icon-pinterest.svg";
import Instagram from "@/public/shared/desktop/icon-instagram.svg";

const footerIcons = [Facebook, Youtube, Twitter, Pinterest, Instagram];
export default function Footer() {
  return (
    <footer className="mt-[310px] md:mt-[331px] xl:mt-[380px] bg-black pt-[253px] md:pt-[166px] xl:pt-[144px] pb-20 md:pb-[72px] relative">
      <div className="absolute px-6 md:px-10 xl:p-0 xl:max-w-[1111px] -top-[190px] md:-top-[264px] xl:-top-[220px] w-[100vw] xl:left-[50%] xl:-translate-x-[50%]">
        <div className="w-full rounded-[15px] bg-peach m-auto relative overflow-hidden py-[64px] px-6 md:py-[57px] md:px-[59px] xl:py-[72px] xl:px-[95px] flex flex-col items-center justify-center xl:justify-between xl:flex-row gap-8">
          <Image
            src={BgPattern}
            alt="footer pattern"
            className="w-[876px] h-[584px] absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] xl:left-auto xl:right-0 xl:translate-x-0 object-cover"
          />
          <div className="relative z-30 text-center xl:max-w-[459px] xl:text-start">
            <p className="text-MobileHeadingL md:text-[2.5rem] md:tracking-[0px] md:leading-[2.5rem] mb-[6px] xl:max-w-[268px] xl:mb-[12px]">
              Let’s talk about your project
            </p>
            <p className="text-MobileBody md:text-body">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <PrimaryButton className="relative z-30" variant={"light"}>
            GET IN TOUCH
          </PrimaryButton>
        </div>
      </div>
      <div className=" px-6 md:px-10 xl:p-0 xl:max-w-[1111px] m-auto flex flex-col items-center justify-center text-white gap-10">
        <div className="flex flex-col gap-8 items-center justify-center w-full md:flex-row md:justify-between">
          <Logo variant={"light"} />
          <div className="w-full h-[1px] bg-white/20 md:hidden"></div>
          <ul className="text-center flex flex-col items-center justify-center gap-8 text-white/80 md:flex-row md:gap-[42px]">
            <li className="text-[14px] tracking-[2px] leading-[14px] uppercase">
              our company
            </li>
            <li className="text-[14px] tracking-[2px] leading-[14px] uppercase">
              Locations
            </li>
            <li className="text-[14px] tracking-[2px] leading-[14px] uppercase">
              Contact
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-white/20 hidden md:block mt-10"></div>

        <div className="flex flex-col items-center justify-center gap-10 md:gap-0 md:flex-row md:justify-between w-full md:items-end">
          <div className="text-center md:text-start">
            <p className="text-body text-white/50 font-bold">
              Designo Central Office
            </p>
            <p className="text-body text-white/50">3886 Wellington Street</p>
            <p className="text-body text-white/50">Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="text-center md:text-start">
            <p className="text-body text-white/50 font-bold">
              Contact Us (Central Office)
            </p>
            <p className="text-body text-white/50">P : +1 253-863-8967</p>
            <p className="text-body text-white/50">M : contact@designo.co</p>
          </div>

          <div className="flex gap-4">
            {footerIcons.map((icon, index) => (
              <Image
                src={icon}
                alt="icon"
                key={index}
                className="cursor-pointer -light-peach hover:translate-y-[-2px] transition-all duration-150"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
