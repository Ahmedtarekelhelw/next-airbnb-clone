"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <h3 className="font-bold hidden md:block text-sm hover:bg-neutral-100 rounded-full transition px-3 py-2 cursor-pointer">
        Airbnb your home
      </h3>
      <div className="flex gap-2 items-center bg-white rounded-full shadow-sm border p-[13px] md:py-1 md:px-2 cursor-pointer hover:shadow-md">
        <AiOutlineMenu />
        <Avatar src={null} />
      </div>
    </div>
  );
}
