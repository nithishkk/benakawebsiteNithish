import React from "react";

const PrivacyPolicy = () => {
   React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 scroll-mt-29 text-gray-800">
      
      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-center text-[#7A1F1F] mb-12">
        Privacy Policy
      </h1>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        <b>Benaka Jewels</b> (“Benaka”, “we”, “us”) is committed to protecting the
        privacy and security of your personal information. We comply with
        applicable privacy and data protection laws.
      </p>

      <p className="mb-10 leading-relaxed">
        This Privacy Policy explains what personal data we collect from you, how
        it is used, shared, and protected when you use our website or services.
      </p>

      {/* Section */}
      <h2 className="font-semibold text-[#7A1F1F] mb-3">
        Information We Collect
      </h2>

      <p className="mb-4 leading-relaxed font-medium">
        Information you provide directly:
      </p>

      <p className="mb-6 leading-relaxed">
        When you register, place an order, or use certain features of our
        website, we may collect personal details such as your name, contact
        number, email address, postal address, username, and password.
      </p>

      <p className="mb-4 leading-relaxed font-medium">
        Information that is automatically collected:
      </p>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Internet Protocol (IP) address</li>
        <li>Browser type and operating system</li>
        <li>Pages visited and links accessed</li>
        <li>Device and bandwidth information</li>
        <li>Standard server log information</li>
        <li>Approximate location data</li>
      </ul>

      {/* Section */}
      <h2 className="font-semibold text-[#7A1F1F] mb-3">
        How We Use Your Information
      </h2>

      <p className="mb-10 leading-relaxed">
        We use the information collected to operate our business, communicate
        with customers, process orders, improve our services, and comply with
        legal obligations.
      </p>

      {/* Section */}
      <h2 className="font-semibold text-[#7A1F1F] mb-3">
        Data Security
      </h2>

      <p className="mb-10 leading-relaxed">
        We implement appropriate technical and organizational security measures
        to protect your personal data from unauthorized access, alteration,
        disclosure, or destruction.
      </p>

      {/* Section */}
      <h2 className="font-semibold text-[#7A1F1F] mb-3">
        Your Rights
      </h2>

      <p className="mb-10 leading-relaxed">
        You have the right to access, update, or delete your personal information
        at any time. Please contact us to exercise these rights.
      </p>

      {/* Section */}
      <h2 className="font-semibold text-[#7A1F1F] mb-3">
        Contact Information
      </h2>

      <p className="leading-relaxed">
        If you have any questions regarding this Privacy Policy, you may contact
        us at <b>support@benakajewels.com</b> <b>+91 97317 73777</b>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
