import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="border-b-2 border-b-sky-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight text-sky-500">
          ShipDrink.com
        </Link>

        {/* Navigation and Mode Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Nav (shown on small screens) */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Main Nav (shown on medium screens and above) */}
          <div className="hidden md:block">
            <MainNav />
          </div>

          {/* Mode Toggle (always shown) */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
