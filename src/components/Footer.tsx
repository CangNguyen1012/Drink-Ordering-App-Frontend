import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-500 py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col items-start">
          <span className="text-3xl font-bold tracking-tight">
            ShipDrink.com
          </span>
          <span className="mt-4 md:mt-0 text-sm">
            © {new Date().getFullYear()} ShipDrink.com. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col">
            <span className="font-bold tracking-tight mb-2">Quick Links</span>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/customer-support" className="hover:underline">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-tight mb-2">Legal</span>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
