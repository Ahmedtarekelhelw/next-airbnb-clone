"use client";

import { useState } from "react";

// My Components
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";

// Custom Hooks
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import { signIn } from "next-auth/react";

import axios from "axios";
import { toast } from "react-hot-toast";

// React Hook Form
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// React Icons
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

type Props = {};

export default function LoginModal({}: Props) {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div>
      <Heading title="Welcome back" subtitle="Login to your account!" />

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
          First time using Airbnb ?{" "}
          <span
            className="cursor-pointer hover:underline font-bold"
            onClick={() => {
              loginModal.onClose();
              registerModal.onOpen();
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
