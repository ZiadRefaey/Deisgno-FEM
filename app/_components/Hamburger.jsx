import React from "react";
import Image from "next/image";
import hamburger from "@/public/shared/mobile/icon-hamburger.svg";
import close from "@/public/shared/mobile/icon-close.svg";
export default function Hamburger({ isActive, setIsActive }) {
  return (
    <div className="md:hidden">
      <Image
        onClick={() => {
          console.log("wahtever");
          setIsActive(!isActive);
        }}
        className="cursor-pointer "
        src={isActive ? close : hamburger}
        alt={isActive ? "Close X Icon" : "Hamburger Icon"}
      />
    </div>
  );
}
