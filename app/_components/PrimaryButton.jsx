import Link from "next/link";
import React from "react";

export default function PrimaryButton({
  children,
  variant,
  className,
  href = "/",
  linkButton = true,
  type = "button",
  onClick,
}) {
  if (linkButton)
    return (
      <button
        type={type}
        className={`pl-6 pr-[25px] pt-[18px] pb-[16px] rounded-lg text-[15px] font-medium tracking-[1px] ${
          variant === "light" ? "bg-white text-black" : "bg-peach text-white "
        } transition-all duration-150 hover:bg-light-peach w-auto inline-block ${className}`}
      >
        <Link href={href}>{children}</Link>
      </button>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`pl-6 pr-[25px] pt-[18px] pb-[16px] rounded-lg text-[15px] font-medium tracking-[1px] ${
        variant === "light" ? "bg-white text-black" : "bg-peach text-white "
      } transition-all duration-150 hover:bg-light-peach w-auto inline-block ${className}`}
    >
      {children}
    </button>
  );
}
