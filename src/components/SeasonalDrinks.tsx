import React from "react";
import image1 from "../assets/IcedPumpkinSpiceLatte.jpg";
import image2 from "../assets/Peppermint-Mocha-sm.webp";

interface SeasonalDrink {
  name: string;
  description: string;
  image: string;
}

const seasonalDrinks: SeasonalDrink[] = [
  {
    name: "Pumpkin Spice Latte",
    description: "A cozy blend of espresso, milk, and pumpkin spice flavor.",
    image: image1,
  },
  {
    name: "Winter Peppermint Mocha",
    description:
      "Rich chocolate and refreshing peppermint, perfect for winter.",
    image: image2,
  },
];

const SeasonalDrinks: React.FC = () => {
  return (
    <div className="my-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
        Seasonal Specials
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {seasonalDrinks.map((drink, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md bg-cyan-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-out"
          >
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-auto object-cover rounded-t-lg mb-4"
              style={{ maxHeight: "300px" }}
            />
            <h3 className="text-xl font-semibold mb-2 text-sky-500">
              {drink.name}
            </h3>
            <p className="text-gray-600">{drink.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalDrinks;
