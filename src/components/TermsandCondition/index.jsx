import React from 'react';

const TermsOfService = () => {
     React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>
            By accessing and using our website, you agree to comply with the following terms and conditions. Please read them carefully.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Use of Services</h2>
          <p>
            You agree not to use our website for any unlawful or prohibited purposes. You are responsible for ensuring that your use of our services is in compliance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p>
            All content on our website, including images, text, logos, and designs, are owned by us or licensed to us. You may not use, reproduce, or distribute any of the content without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Limitations of Liability</h2>
          <p>
            We are not liable for any damages or losses that occur through your use of our website or services, including any direct, indirect, incidental, or punitive damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Changes to Terms</h2>
          <p>
            We reserve the right to update or change these terms at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of those changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Governing Law</h2>
          <p>
            These terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the appropriate courts of that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions regarding these terms, please contact us at [email address].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;