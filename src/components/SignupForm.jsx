"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import toast from 'react-hot-toast';
import { TextArea } from "./ui/textarea";
import { Select } from "./ui/select";

export default function SignupFormDemo() {

  const onSubmit = async (event) => {

    event.preventDefault();
  
    const formData = new FormData(event.target);

    formData.append("access_key", "08d77356-1f07-4cad-83a0-744c433b8ca4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for your submission!");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
    } catch (error) {
      toast.error("Faulty API" + error.message);
    }
    
    
  };
  return (
    <div
      className="shadow-input mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
     
      <form className="my-8" onSubmit={onSubmit}>

        <div
          className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">* First name</Label>
            <Input name="firstname" id="firstname" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">* Last name</Label>
            <Input name="lastname" id="lastname" type="text" required />
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">* Email Address</Label>
          <Input name="email" id="email" type="email" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">* Company Name</Label>
          <Input name="company" id="company" type="text" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="country">* Company Country of Origin</Label>
          <Input name="country" id="country" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="role">* Company Position</Label>
        <Select name="role" id="role" required>
          <option value="">-- Select --</option>
          <option value="ceo-founder">Founder / Owner / CEO</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="operations">Operations & Fulfillment</option>
          <option value="finance">Finance / Accounting</option>
          <option value="legal">Legal / Compliance</option>
          <option value="other">Other</option>
        </Select>
      </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="revenue">* Annual Revenue</Label>
          <Select name="revenue" id="revenue" required>
            <option value="">-- Select --</option>
            <option value="0-1M">$0 – $1M</option>
            <option value="1M-10M">$1M – $10M</option>
            <option value="10M-50M">$10M – $50M</option>
            <option value="50M-100M">$50M – $100M</option>
            <option value="100M+">$100M+</option>
          </Select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="project-details">Share your project details:</Label>
              <TextArea
                name="project-details"
                id="project-details"
                rows="5"
              ></TextArea>
        </LabelInputContainer>


        

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Submit &rarr;
          <BottomGradient />
        </button>

        <div
          className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
