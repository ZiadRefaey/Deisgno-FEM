"use client";
import FormErrorAlert from "./FormErrorAlert";
import PrimaryButton from "./PrimaryButton";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const InputStyling =
  "bg-transparent outline-none border-b-white/50 border-b py-[11px] px-[14px] placeholder:text-white/50 w-full cursor-pointer hover:border-b-white transition-all duration-50 focus:border-b-white";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    emailjs.init("DFEmmfbHW9sQ6xH4X");
  }, []);

  const onSubmit = (data) => {
    emailjs
      .send("service_oen3lee", "template_vhxmf5q", {
        to_name: "Ziad Refaey",
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
      })
      .then(
        () => {
          console.log("success");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("fail");
          toast.error("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full xl:w-[380px] flex flex-col items-center justify-center gap-[13px] relative z-20 md:items-end"
    >
      <div className="relative w-full">
        <input
          className={InputStyling}
          type="text"
          name="from_name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>}
      </div>
      <div className="relative w-full">
        <input
          type="email"
          name="from_email"
          className={InputStyling}
          placeholder="Email Address"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address", // Custom error message
            },
          })}
        />
        {errors.email && <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>}
      </div>
      <div className="relative w-full">
        <input
          className={InputStyling}
          placeholder="Phone"
          name="from_phone"
          type="text"
          {...register("phone", { required: true })}
        />
        {errors.phone && <FormErrorAlert>Can&apos;t be empty</FormErrorAlert>}
      </div>
      <div className="relative w-full">
        <textarea
          name="message"
          className="h-[102px] bg-transparent outline-none border-b-white/50 border-b py-[11px] px-[14px] placeholder:text-white/50 w-full cursor-pointer hover:border-b-white transition-all duration-50 focus:border-b-white"
          placeholder="You Message"
          {...register("message", { required: true })}
          type={"text"}
        />
        {errors.message && (
          <FormErrorAlert position="right-0 bottom-4">
            Can&apos;t be empty
          </FormErrorAlert>
        )}
      </div>
      <PrimaryButton type={"submit"} linkButton={false} variant="light">
        Submit
      </PrimaryButton>
      <Toaster />
    </form>
  );
}
