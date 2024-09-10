import React from "react";

export default function SectionWrapper({
  children,
  className,
  fullWidthMobile = false,
}) {
  return (
    <section
      className={`${className} mb-[120px] ${
        fullWidthMobile ? "px-0" : "px-6"
      } md:px-10 xl:p-0 xl:max-w-[1111px] m-auto`}
    >
      {children}
    </section>
  );
}
