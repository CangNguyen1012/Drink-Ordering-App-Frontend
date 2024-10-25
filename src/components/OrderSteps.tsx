import React from "react";
import {
  FaCity,
  FaStore,
  FaCoffee,
  FaCartPlus,
  FaMoneyBillAlt,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCity />,
    title: "Choose Your City",
    description: "Use the search bar to select the city for your order.",
  },
  {
    icon: <FaStore />,
    title: "Select a Store",
    description:
      "Browse available stores and choose one based on location and rating.",
  },
  {
    icon: <FaCoffee />,
    title: "Pick Your Drink",
    description: "Select your drink from the menu and specify the quantity.",
  },
  {
    icon: <FaCartPlus />,
    title: "Add to Cart",
    description: "Review your selection and add items to the cart.",
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Checkout",
    description: "Enter delivery details and complete payment.",
  },
  {
    icon: <FaTruck />,
    title: "Delivery & Enjoy",
    description: "Receive your order and enjoy your drink!",
  },
];

const OrderSteps: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
        Steps to Order a Drink
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 md:px-4 text-center relative"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-sky-200 text-sky-500 text-4xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <svg
                className="hidden md:block w-12 h-12 text-gray-300 absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSteps;
