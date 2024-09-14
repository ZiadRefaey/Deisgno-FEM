import Image from "next/image";
import Leaf from "@/public/shared/desktop/bg-pattern-leaf.svg";

export default function LeafPattern({ className }) {
  return (
    <div className={`w-[1006px] h-[594px] -z-10 absolute ${className}`}>
      <Image
        src={Leaf}
        alt="Leaf Pattern"
        className="w-full h-full bg-contain"
        fill
      />
    </div>
  );
}
