import React from "react";

const PrivacyPolicy = () => {
     React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <a
                    href="/" className="hover:underline cursor-pointer">Home</a>
          <span className="mx-2">|</span>
          <span className="text-gray-700 font-medium">Privacy Policy</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold text-center text-[#7A1F1F] mb-12">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-7 text-[15px]">

          <p>
            Benaka Jewels (“Benaka”, “we”, “us”) is committed to protecting the
            privacy and security of your personal information. We comply with
            applicable privacy and data protection laws in the country where
            our products and services are distributed.
          </p>

          <p>
            This Privacy Policy explains what personal data we collect from you,
            how your data is used, how it is shared, and how we protect your
            information when you use our website or services.
          </p>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              What information is collected about you:
            </h2>

            <p className="mt-4 font-medium text-gray-800">
              Information you provide directly:
            </p>

            <p className="mt-2">
              When you register, place an order, or use certain features of our
              website, we may ask you to provide personal information such as
              your name, contact number, postal address, email address,
              username, and password.
            </p>

            <p className="mt-6 font-medium text-gray-800">
              Information that is automatically collected:
            </p>

            <p className="mt-2">
              When you visit or use our website, certain information may be
              collected automatically, including:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and links accessed</li>
              <li>Device and bandwidth information</li>
              <li>Standard server log information</li>
              <li>Approximate location data</li>
            </ul>
          </div>

          {/* Another Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              How we use your information:
            </h2>

            <p className="mt-2">
              We use the information collected to operate our business,
              communicate with customers, process orders, improve our services,
              and comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Data security:
            </h2>

            <p className="mt-2">
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Contact information:
            </h2>

            <p className="mt-2">
              If you have questions or concerns regarding this Privacy Policy,
              you may contact us at{" "}
              <span className="font-medium text-gray-900">
                support@benakajewels.com 
              </span> &nbsp; &nbsp; 
              <span className="font-medium text-gray-900"><b>+91 97317 73777</b></span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
