import React from "react";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
      <button
        onClick={onClose}
        className="text-sm text-[#b8860b] mb-6 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <img
            src={product?.coverImageUrl}
            alt={product?.productName}
            className="rounded-xl w-full mb-4"
          />

          <div className="flex gap-3 mt-4">
            {product?.carouselImages?.map((img) => (
              <img
                key={img?.id}
                src={img?.imageUrl}
                alt=""
                className="h-20 w-20 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold">
            {product?.productName}
          </h2>

          <p className="mt-4 text-gray-600">
            {product?.description}
          </p>

          <div className="mt-6 space-y-2">
            <p><b>Weight:</b> {product?.weight} g</p>
            <p><b>Purity:</b> {product?.purity}</p>
            <p>
              <b>New Arrival:</b>{" "}
              {product?.isNewArrival ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
