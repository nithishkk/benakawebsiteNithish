import React from "react";

const TermsOfService = () => {
     React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <a
                    href="/" className="hover:underline cursor-pointer">Home</a>          <span className="mx-2">|</span>
          <span className="text-gray-700 font-medium">Terms of Service</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-center text-[#7A1F1F] mb-14">
          Terms of Service
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-7 text-[15px]">

          <p>
            These Terms of Service (“Terms”) govern your access to and use of the
            Benaka Jewels website, products, and services. By using our website,
            you agree to comply with these Terms.
          </p>

          <p>
            If you do not agree with any part of these Terms, you must discontinue
            use of our services immediately.
          </p>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Use of Our Services
            </h2>

            <p className="mt-3">
              You agree to use our website and services only for lawful purposes
              and in a manner that does not infringe the rights of others.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>You must provide accurate and current information</li>
              <li>You must not misuse or interfere with website functionality</li>
              <li>You must not attempt unauthorized access to our systems</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Intellectual Property
            </h2>

            <p className="mt-3">
              All content on this website, including images, designs, logos, and
              text, is the intellectual property of Benaka Jewels and is protected
              by applicable laws.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Pricing & Orders
            </h2>

            <p className="mt-3">
              Prices and product availability are subject to change without
              notice. Benaka Jewels reserves the right to cancel or refuse any
              order at its discretion.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Limitation of Liability
            </h2>

            <p className="mt-3">
              Benaka Jewels shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use of our
              services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Changes to Terms
            </h2>

            <p className="mt-3">
              We reserve the right to modify these Terms at any time. Changes
              will be effective once published on this page.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-gray-900 mt-10 mb-2">
              Contact Information
            </h2>

            <p className="mt-3">
              If you have any questions regarding these Terms of Service, please
              contact us at{" "}
              <span className="font-medium text-gray-900">
                support@benakajewels.com
              </span>. &nbsp; &nbsp;
                <span className="font-medium text-gray-900"><b>+91 97317 73777</b></span>

            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
