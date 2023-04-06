"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="hidden md:block"
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={100}
      />
    </Link>
  );
}
