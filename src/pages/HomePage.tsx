import OrderSteps from "@/components/OrderSteps";
import landingImage from "../assets/Firefly_drinks_order_app_in_mobile_with_background_color_is_sky-500_36847-removebg-preview.png";
import appDownloadImage from "../assets/google-play-app-store-apple-apple-e2420395e8f1ec53a4cf290200c94f78.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import PromotionalOffer from "@/components/PromotionalOffer";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import UserRecommendations from "@/components/UserRecommendations";
import SeasonalDrinks from "@/components/SeasonalDrinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleSearchSubmit = (searchFormValue: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValue.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div
        className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16"
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      >
        <h1 className="text-5xl font-bold tracking-tight text-sky-500">
          Any stores you can order some drinks!
        </h1>
        <span className="text-xl text-sky-500">
          Search our store whenever you want to drink!
        </span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <OrderSteps
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <UserRecommendations
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <SeasonalDrinks
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <FeaturedDrinks
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <PromotionalOffer
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <CustomerTestimonials
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <Separator
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      />
      <div
        className="grid md:grid-cols-2 gap-5"
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="200"
        data-aos-once="true"
      >
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the ShipDrink.com App for faster ordering and personalised
            recommendations.
          </span>
          <ul className="text-left list-disc list-inside mt-4 text-gray-600">
            <li>
              Get exclusive offers and discounts only available on the app.
            </li>
            <li>Personalised recommendations tailored to your taste.</li>
            <li>Quick and easy ordering process with just a few taps.</li>
            <li>Track your order status in real-time.</li>
          </ul>
          <img src={appDownloadImage} className="mt-4 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
