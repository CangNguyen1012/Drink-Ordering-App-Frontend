import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="border-b-2 border-b-sky-500 py-6">
      <div className="container mx-auto flex justify-between item-center">
        <Link to="/" className="text-3xl font-bold tracking-tight text-sky-500">
          ShipDrink.com
        </Link>
        <ModeToggle />
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
