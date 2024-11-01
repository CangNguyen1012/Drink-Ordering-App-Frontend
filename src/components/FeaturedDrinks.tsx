import React from "react";
import drink1 from "../assets/iced_latte.png";
import drink2 from "../assets/strawberry_moothie.png";
import drink3 from "../assets/mango_lemonade.png";

interface Drink {
  name: string;
  description: string;
  image: string;
}

const featuredDrinks: Drink[] = [
  {
    name: "Iced Latte",
    description: "A smooth blend of espresso and milk, served over ice.",
    image: drink1,
  },
  {
    name: "Strawberry Smoothie",
    description:
      "Fresh strawberries blended into a creamy, delicious smoothie.",
    image: drink2,
  },
  {
    name: "Mango Lemonade",
    description:
      "A refreshing mix of mango and lemonade, perfect for a sunny day.",
    image: drink3,
  },
];

const FeaturedDrinks: React.FC = () => {
  return (
    <div className="my-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
        Featured Drinks of the Month
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {featuredDrinks.map((drink, index) => (
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

export default FeaturedDrinks;
