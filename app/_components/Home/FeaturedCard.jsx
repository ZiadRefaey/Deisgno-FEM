import IllustrationWithCircleBg from "../IllustrationWithCircleBg";

export default function FeaturedCard({
  illustraion,
  title,
  paragraph,
  rotation,
  dimensions,
}) {
  return (
    <div className="flex flex-col gap-12 md:flex-row xl:flex-col items-center justify-center">
      <IllustrationWithCircleBg
        dimensions={dimensions}
        rotation={rotation}
        alt={title}
        illustraion={illustraion}
      />
      <div className="text-black text-center md:text-start xl:text-center">
        {" "}
        <p className="text-headingS uppercase mb-8 md:mb-4 xl:mb-8">{title}</p>
        <p className="text-body">{paragraph}</p>
      </div>
    </div>
  );
}
