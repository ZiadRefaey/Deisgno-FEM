import AlertIcon from "@/public/contact/desktop/icon-error.svg";
import Image from "next/image";
export default function FormErrorAlert({
  children,
  position = "right-2 top-[50%] translate-y-[-50%]",
}) {
  return (
    <div
      className={`absolute flex items-center justify-center gap-2 ${position}`}
    >
      <p className={`italic text-[12px] leading-[26px] tracking-[0px]`}>
        {children}
      </p>
      <Image src={AlertIcon} alt="Icon Alert" />
    </div>
  );
}
