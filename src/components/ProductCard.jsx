import React from "react";

const ProductCard = ({ product, onSelect ,goldPrice}) => {
  const formatted = (value) => {
    if (!value) return "—";
    return value.toLocaleString("en-IN");
  };

  const cleanWeight = (weight) => {
    if (!weight) return 0;
    return Number(weight.toString().replace(/[^0-9.]/g, ""));
  };

  const weight = cleanWeight(product?.weight);

  const price =
    goldPrice?.gold_22k_gram && weight
      ? goldPrice.gold_22k_gram * weight
      : null;


  return (
    <div
    //   onClick={() => onSelect(product)}
      className="bg-white rounded-xl shadow p-3 cursor-pointer hover:shadow-lg"
    >
      <img
        src={product?.coverImageUrl}
        alt={product?.productName}
        className="h-48 w-full object-cover rounded-md"
      />

      <h4 className="mt-3 font-semibold">
        {product?.productName}
      </h4>

      <p className="text-sm text-gray-500">
        {product?.shortDescription}
      </p>

      <p className="text-sm mt-1">
        Weight: <b>{product?.weight}</b> | Purity: <b>{product?.purity}</b> <br/>
        Price: <b>{formatted(price)}</b>
      </p>
    </div>
  );
};

export default ProductCard;
