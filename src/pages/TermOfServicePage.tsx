import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsOfServicePage = () => {
  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Terms of Service</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <p>
          <strong>Effective Date:</strong> [10/2/2025]
        </p>
        <p>
          Welcome to Drink Ordering App! By using our service, you agree to the
          following terms:
        </p>

        <h2 className="text-lg font-semibold">1. Account & Usage</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 18 years old to use this app.</li>
          <li>You are responsible for maintaining your account security.</li>
        </ul>

        <h2 className="text-lg font-semibold">2. Ordering & Payments</h2>
        <ul className="list-disc list-inside">
          <li>Orders are final once placed and cannot be canceled.</li>
          <li>Payments are securely processed via Stripe.</li>
        </ul>

        <h2 className="text-lg font-semibold">3. Prohibited Activities</h2>
        <ul className="list-disc list-inside">
          <li>No fraudulent transactions.</li>
          <li>No misuse of promotions.</li>
          <li>No harassment of other users.</li>
        </ul>

        <h2 className="text-lg font-semibold">4. Limitation of Liability</h2>
        <p>
          We are not responsible for service interruptions or product quality
          from third-party vendors.
        </p>

        <p>
          For concerns, contact us at{" "}
          <strong>legal@drinkorderingapp.com</strong>.
        </p>
      </CardContent>
    </Card>
  );
};

export default TermsOfServicePage;
