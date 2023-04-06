"use client";
import Image from "next/image";

type Props = {
  src: string | null | undefined;
};

export default function Avatar({ src }: Props) {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
      width="30"
      height="30"
      className="rounded-full hidden md:block"
    />
  );
}
