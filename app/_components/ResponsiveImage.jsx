import Image from "next/image";
import React from "react";

export default function ResponsiveImage({
  desktopImage,
  tabletImage,
  mobileImage,
  className,
  alt,
}) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktopImage.src} />
      <source media="(min-width: 768px)" srcSet={tabletImage.src} />
      <Image fill src={mobileImage} alt={alt} className={className} />
    </picture>
  );
}
