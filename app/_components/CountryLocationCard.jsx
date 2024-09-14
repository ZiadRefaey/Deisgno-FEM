import React from "react";
import IllustrationWithCircleBg from "./IllustrationWithCircleBg";
import PrimaryButton from "./PrimaryButton";

export default function CountryLocationCard({
  title,
  rotation,
  illustration,
  dimensions,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <IllustrationWithCircleBg
        alt={title}
        rotation={rotation}
        illustraion={illustration}
        dimensions={dimensions}
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-headingS uppercase text-black">{title}</p>
        <PrimaryButton variant={"dark"} href="/locations">
          SEE LOCATION
        </PrimaryButton>
      </div>
    </div>
  );
}
