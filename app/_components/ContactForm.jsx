import FormErrorAlert from "./FormErrorAlert";
import PrimaryButton from "./PrimaryButton";
const InputStyling =
  "bg-transparent outline-none border-b-white/50 border-b py-[11px] px-[14px] placeholder:text-white/50 w-full cursor-pointer hover:border-b-white transition-all duration-50 focus:border-b-white";
export default function ContactForm() {
  return (
    <form className="w-full xl:w-[380px] flex flex-col items-center justify-center gap-[13px] relative z-20 md:items-end">
      <div className="relative w-full">
        <input className={InputStyling} placeholder="Name" />
        <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>
      </div>
      <div className="relative w-full">
        <input className={InputStyling} placeholder="Email Address" />
        <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>
      </div>
      <div className="relative w-full">
        <input className={InputStyling} placeholder="Phone" />
        <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>
      </div>
      <div className="relative w-full">
        <textarea
          className="h-[102px] bg-transparent outline-none border-b-white/50 border-b py-[11px] px-[14px] placeholder:text-white/50 w-full cursor-pointer hover:border-b-white transition-all duration-50 focus:border-b-white"
          placeholder="You Message"
        />
        <FormErrorAlert position="right-0 bottom-4">
          Can&apos;t be empty
        </FormErrorAlert>
      </div>
      <PrimaryButton type={"submit"} linkButton={false} variant="light">
        Submit
      </PrimaryButton>
    </form>
  );
}
