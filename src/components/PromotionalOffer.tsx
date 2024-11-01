import React from "react";

const PromotionalOffer: React.FC = () => {
  return (
    <div className="my-16 bg-sky-500 text-white py-12 px-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
      <p className="text-xl mb-6">
        Get 10% off your first order. Use code <strong>FIRSTORDER2024</strong>{" "}
        at checkout!
      </p>
      <button className="bg-white text-sky-500 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
        Order Now
      </button>
    </div>
  );
};

export default PromotionalOffer;
