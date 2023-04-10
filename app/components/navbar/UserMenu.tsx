"use client";

import { useState } from "react";

// My Components
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

// React icons
import { AiOutlineMenu } from "react-icons/ai";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

type Props = {
  currentUser?: User | null;
};

export default function UserMenu({ currentUser }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <div className="flex items-center gap-4 relative">
      <h3 className="font-bold hidden md:block text-sm hover:bg-neutral-100 rounded-full transition px-3 py-2 cursor-pointer">
        Airbnb your home
      </h3>
      <div
        className="flex gap-2 items-center bg-white rounded-full shadow-sm border p-[13px] md:py-1 md:px-2 cursor-pointer hover:shadow-md"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu />
        <Avatar src={null} />
      </div>
      {open && (
        <div className="w-[200px] py-2 bg-white rounded-md shadow-xl absolute top-[50px] right-0">
          {currentUser ? (
            <>
              <MenuItem
                label="My trips"
                onClick={() => router.push("/trips")}
              />
              <MenuItem
                label="My favorites"
                onClick={() => router.push("/favorites")}
              />
              <MenuItem
                label="My reservations"
                onClick={() => router.push("/reservations")}
              />
              <MenuItem
                label="My properties"
                onClick={() => router.push("/properties")}
              />
              <MenuItem label="Airbnb your home" onClick={() => {}} />
              <hr />
              <MenuItem label="Logout" onClick={() => signOut()} />
            </>
          ) : (
            <>
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                  loginModal.onOpen();
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  setOpen(!open);
                  registerModal.onOpen();
                }}
                label="Sign Up"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
