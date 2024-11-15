const FaqPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-xl">What is ShipDrink.com?</h2>
          <p className="text-sm mt-2">
            ShipDrink.com is an online platform that allows users to order
            drinks from local stores and get them delivered quickly.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">How do I place an order?</h2>
          <p className="text-sm mt-2">
            To place an order, browse through our list of available drinks, add
            items to your cart, and proceed to checkout. Follow the on-screen
            instructions to complete your order.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">
            What payment methods do you accept?
          </h2>
          <p className="text-sm mt-2">
            We accept various payment methods, including credit cards, debit
            cards, and popular digital payment options.
          </p>
        </div>
        {/* Add more FAQ items here as needed */}
      </div>
    </div>
  );
};

export default FaqPage;
