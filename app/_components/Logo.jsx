import Image from "next/image";
import React from "react";
import LogoDark from "@/public/shared/desktop/logo-dark.png";
import LogoLight from "@/public/shared/desktop/logo-light.png";
import Link from "next/link";
export default function Logo({ variant }) {
  return (
    <Link
      href={"/"}
      className="w-[202px] h-[27px] xl:w-[196px] xl:h-[24px] relative cursor-pointer"
    >
      <Image
        src={
          variant === "dark" ? LogoDark : variant === "light" ? LogoLight : ""
        }
        alt="Designo Logo"
        fill
        className="w-full h-full object-cover"
      />
    </Link>
  );
}
