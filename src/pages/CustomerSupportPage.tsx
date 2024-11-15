const CustomerSupportPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Customer Support</h1>
      <p className="text-sm mb-6">
        If you need assistance, our customer support team is here to help. You
        can reach us via the following options:
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-xl">Email Support</h2>
          <p className="text-sm mt-2">
            Send us an email at{" "}
            <a
              href="mailto:support@shipdrink.com"
              className="text-blue-500 underline"
            >
              support@shipdrink.com
            </a>
            , and we will respond within 24 hours.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Phone Support</h2>
          <p className="text-sm mt-2">
            Call us at <span className="font-medium">1-800-1203-6459</span>{" "}
            during our business hours: 7am - 10pm, All days.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Live Chat</h2>
          <p className="text-sm mt-2">
            Use the live chat feature on our website for instant assistance
            during our business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
