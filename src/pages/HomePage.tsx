import OrderSteps from "@/components/OrderSteps";
import landingImage from "../assets/Firefly_drinks_order_app_in_mobile_with_background_color_is_sky-500_36847-removebg-preview.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValue: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValue.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
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
      <Separator />
      <OrderSteps />
      <Separator />
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the ShipDrink.com App for faster ordering and personalised
            recommendations.
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
