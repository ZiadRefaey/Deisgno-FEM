import React from "react";
import NavItem from "./NavItem";

export default function NavMenu() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-[42px] ">
      {" "}
      <NavItem href={"/about"}>our company</NavItem>
      <NavItem href={"/locations"}>locations</NavItem>
      <NavItem href={"/contact"}>Contact</NavItem>
    </ul>
  );
}
