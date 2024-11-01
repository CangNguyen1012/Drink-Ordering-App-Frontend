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
                <a href="#faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#support" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:underline">
                  Drink Categories
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-tight mb-2">Legal</span>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
