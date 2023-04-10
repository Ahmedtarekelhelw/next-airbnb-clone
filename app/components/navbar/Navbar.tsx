"use client";

import { User } from "@prisma/client";
// My Components
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

type Props = {
  currentUser: User | null;
};

export default function Navbar({ currentUser }: Props) {
  return (
    <nav className="bg-white sticky top-0 shadow-sm border-b z-10">
      <Container>
        <div className="flex justify-between items-center py-4 gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </nav>
  );
}
