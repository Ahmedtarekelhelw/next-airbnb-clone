import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 shadow-sm border-b z-10">
      <Container>
        <div className="flex justify-between items-center py-4 gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </nav>
  );
}
