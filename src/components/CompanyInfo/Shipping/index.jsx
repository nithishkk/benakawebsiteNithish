import React from "react";

const ShippingPolicy = () => {
     React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
          <div className="text-sm text-gray-500 mb-8">
          <a
                    href="/" className="hover:underline cursor-pointer">Home</a>          <span className="mx-2">|</span>
          <span className="text-gray-700 font-medium">Shipping</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-center text-[#7A1F1F] mb-12">
          Shipping Policy
        </h1>

        {/* Intro */}
        <p className="mb-6 leading-relaxed">
          <b>Benaka Jewels</b> (“Benaka”, “we”, “us”) ensures safe, insured, and
          timely delivery of jewellery orders across India.
        </p>

        <p className="mb-8 leading-relaxed">
          This Shipping Policy outlines our order processing, delivery timelines,
          and shipping standards.
        </p>

        <h2 className="font-semibold mb-3">Order Processing</h2>
        <p className="mb-6 leading-relaxed">
          All orders are processed within <b>2–4 business days</b> after order
          confirmation, excluding public holidays and weekends.
        </p>

        <h2 className="font-semibold mb-3">Delivery Timeline</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Delivery usually takes <b>5–10 business days</b> from dispatch.</li>
          <li>Delivery timelines may vary depending on location.</li>
          <li>Remote areas may require additional delivery time.</li>
        </ul>

        <h2 className="font-semibold mb-3">Packaging & Insurance</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>All shipments are fully insured until delivery.</li>
          <li>Jewellery is packed in secure, tamper-proof packaging.</li>
        </ul>

        <h2 className="font-semibold mb-3">Shipping Charges</h2>
        <p className="mb-8 leading-relaxed">
          We offer <b>free shipping</b> across India on all jewellery orders.
        </p>

        <h2 className="font-semibold mb-3">Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions regarding shipping or delivery, please contact
          our customer support team with your order details.
        </p>

      </div>
    </section>
  );
};

export default ShippingPolicy;
