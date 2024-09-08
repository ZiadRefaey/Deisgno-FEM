import Link from "next/link";
import React from "react";

export default function MobileNavItem({ href, children }) {
  return (
    <li className=" text-[24px] leading-6 tracking-[0.125rem] text-white uppercase">
      <Link href={href}>{children}</Link>
    </li>
  );
}
