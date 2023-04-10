"use client";

import { useState } from "react";

// My Components
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

// Custom Hooks
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import axios from "axios";
import { toast } from "react-hot-toast";

// React Hook Form
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// React Icons
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type Props = {};

export default function RegisterModal({}: Props) {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something Went Wrong.");
      })
      .finally(() => setLoading(false));
  };

  const bodyContent = (
    <div>
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        required
        register={register}
        errors={errors}
      />
      <Input
        id="email"
        label="Email"
        disabled={loading}
        required
        register={register}
        errors={errors}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={loading}
        required
        register={register}
        errors={errors}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-3">
      <div className="text-center pb-2">
        <h3 className="relative top-3 text-neutral-500 text-sm bg-white inline-block px-3">
          or
        </h3>
        <div className="h-[1px] bg-neutral-300" />
      </div>
      <Button
        label="Continue with Google"
        outline
        onClick={() => {}}
        icon={FcGoogle}
      />
      <Button
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
        outline
      />
      <div className="text-center text-neutral-500">
        <p>
          Already have an account ?{" "}
          <span
            className="cursor-pointer hover:underline font-bold"
            onClick={() => {
              registerModal.onClose();
              loginModal.onOpen();
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
