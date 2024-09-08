import React from "react";
import NavItem from "./NavItem";

export default function NavMenu() {
  return (
    <ul className="hidden md:flex items-center justify-center gap-[42px] ">
      {" "}
      <NavItem href={"/"}>our company</NavItem>
      <NavItem href={"/"}>locations</NavItem>
      <NavItem href={"/"}>Contact</NavItem>
    </ul>
  );
}
