import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

const PrivacyPolicyPage = () => {
  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <p>
          <strong>Effective Date:</strong> [10/2/2025]
        </p>
        <p>
          Welcome to Drink Ordering App. Your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information.
        </p>

        <h2 className="text-lg font-semibold">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Personal Data:</strong> Name, email, phone number, and
            payment details.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with
            our platform.
          </li>
          <li>
            <strong>Location Data:</strong> If allowed, we collect your location
            for service improvements.
          </li>
        </ul>

        <h2 className="text-lg font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside">
          <li>To process and manage orders.</li>
          <li>To enhance user experience.</li>
          <li>To send updates and promotions.</li>
        </ul>

        <h2 className="text-lg font-semibold">3. Data Sharing & Security</h2>
        <ul className="list-disc list-inside">
          <li>We do not sell your personal data.</li>
          <li>Your information is encrypted and securely stored.</li>
          <li>We share data with payment providers when necessary.</li>
        </ul>

        <h2 className="text-lg font-semibold">4. Your Rights</h2>
        <p>
          You can update or delete your account at any time and opt out of
          marketing emails.
        </p>

        <p>
          If you have any questions, contact us at{" "}
          <strong>support@drinkorderingapp.com</strong>.
        </p>
      </CardContent>
    </Card>
  );
};

export default PrivacyPolicyPage;
