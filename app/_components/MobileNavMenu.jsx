import React from "react";
import MobileNavItem from "./MobileNavItem";

export default function MobileNavMenu({ isActive }) {
  return (
    <ul
      className={`w-full px-6 py-12 bg-black absolute top-0 left-0  flex flex-col gap-8 items-start z-20 ${
        isActive
          ? "translate-y-[96px] opacity-100"
          : "-translate-y-[calc(100%-96px)] opacity-0 hidden"
      } transition-all duration-300 md:hidden`}
    >
      <MobileNavItem href={"/about"}>our company</MobileNavItem>
      <MobileNavItem href={"/locations"}>locations</MobileNavItem>
      <MobileNavItem href={"/contact"}>Contact</MobileNavItem>
    </ul>
  );
}
