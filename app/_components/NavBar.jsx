"use client";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header className="m-auto w-full px-6 py-[34px] md:px-10 md:py-[64px] xl:px-0 xl:max-w-[1111px] flex items-center justify-between relative z-50 bg-white">
        <Logo variant={"dark"} />
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
        <MobileNavMenu isActive={isActive} />
        <NavMenu />
      </header>
      <div
        className={`w-[100vw] h-[100vh] ${
          isActive ? "fixed" : "hidden"
        } top-0 left-0 bg-black/60 z-30 md:hidden`}
        onClick={() => {
          setIsActive(false);
        }}
      ></div>
    </>
  );
}
