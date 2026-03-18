import React from "react";

const ReturnPolicy = () => {
   React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="bg-white w-full">
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
   <div className="text-sm text-gray-500 mb-8">
          <a
                    href="/" className="hover:underline cursor-pointer">Home</a>          <span className="mx-2">|</span>
          <span className="text-gray-700 font-medium">Return Policy</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-center text-[#7A1F1F] mb-12">
          Return Policy
        </h1>

        {/* Intro Paragraph */}
        <p className="mb-6 leading-relaxed">
          <b>Benaka Jewels</b> (“Benaka”, “we”, “us”) is committed to ensuring
          complete customer satisfaction with every purchase. This Return Policy
          explains the conditions under which returns and refunds are accepted.
        </p>

        <p className="mb-8 leading-relaxed">
          By purchasing from our website or store, you agree to the terms outlined
          below.
        </p>

        <h2 className="font-semibold mb-3">Return Eligibility</h2>
        <p className="mb-4 leading-relaxed">
          You may be eligible for a return under the following conditions:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Returns are accepted within <b>7 days</b> of delivery.</li>
          <li>
            Products must be unused, unworn, and returned in original packaging
            along with invoice and tags.
          </li>
          <li>
            Custom-made or personalized jewellery is not eligible for return.
          </li>
        </ul>

        <h2 className="font-semibold mb-3">Non-Refundable Charges</h2>
        <p className="mb-8 leading-relaxed">
          Making charges, wastage charges, certification fees, and applicable
          taxes may be non-refundable depending on the product purchased.
        </p>

        <h2 className="font-semibold mb-3">Refund Process</h2>
        <p className="mb-8 leading-relaxed">
          Once the returned product is received and inspected, approved refunds
          will be processed within <b>7–10 business days</b> to the original mode
          of payment.
        </p>

        <p className="mb-8 leading-relaxed">
If approved we'll provide a replacement for the damaged product within <b>7-10 days </b>(we'll deliver the product within <b>10 Days</b>)        </p>

        <h2 className="font-semibold mb-3">Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions regarding returns or exchanges, please contact
          our customer support team with your order details.
        </p>

      </div>
    </section>
  );
};

export default ReturnPolicy;
