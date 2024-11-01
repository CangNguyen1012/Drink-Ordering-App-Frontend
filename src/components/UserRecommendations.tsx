import React from "react";
import image1 from "../assets/Salted-Caramel-Frappe.jpg";
import image2 from "../assets/cold-brew-mocha.webp";

interface Recommendation {
  name: string;
  description: string;
  image: string;
}

const userRecommendations: Recommendation[] = [
  {
    name: "Caramel Frappe",
    description: "A delicious caramel-flavored frappe just for you.",
    image: image1,
  },
  {
    name: "Mocha Cold Brew",
    description: "Your favorite cold brew with a mocha twist.",
    image: image2,
  },
];

const UserRecommendations: React.FC = () => {
  return (
    <div className="my-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
        Recommended for You
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {userRecommendations.map((drink, index) => (
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

export default UserRecommendations;
