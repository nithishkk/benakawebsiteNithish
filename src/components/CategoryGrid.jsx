import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import ProductCard from "./ProductCard";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6InZlZXJhbm5hLnJhdmkua3VtYXJAYmVuYWthZ3JvdXBzLmNvbSIsInVzZXJJZCI6IjY0ZDljNjJhYjQ1NjcwYzE4NjNlMGVkOCIsImV4cCI6MTc3NDA5MDQxNn0.KnYMbVEyD_J27W4xNpr2BfrOhWuS9pL_E2X3H9SWKp8";

function CategoryGrid({
  activeCollectionId,
  products,
  loadingProducts,
  onCategoryClick,
  onBack,
}) {
  const [collections, setCollections] = useState([]);
   const [goldPrice, setGoldPrice] = useState([]);

  // Fetch collections ONLY
  useEffect(() => {
    fetch("https://aapi.benakajewellers.com/getAllCollection", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => res?.json())
      .then((data) => setCollections(data || []))
      .catch(console.error);
  }, []);


useEffect(() => {
  fetch("https://capi.benakajewellers.com/getGoldSilverPrices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    // body: JSON.stringify({}), // ✅ empty payload (important)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch gold/silver prices");
      }
      return res.json();
    })
    .then((data) => {
      setGoldPrice(data || []);
    })
    .catch((err) => {
      console.error("Gold price API error:", err);
    });
}, []);

  return (
    <section className="py-12 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-4">
         {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#b8860b] tracking-wide">
            Explore Our Exclusive Jewelry
          </h2>
          <p className="text-gray-700 mt-2 text-sm">
            Discover unique pieces crafted with elegance and perfection.
          </p>
        </div>


        {/* 🔹 SHOW CATEGORIES */}
        {!activeCollectionId && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {collections.map((item) => (
              <Tile
                key={item?.id}
                src={item?.imageUrl}
                label={item?.collectionName}
                onClick={() => onCategoryClick(item?.collectionId)}
              />
            ))}
          </div>
        )}

        {/* 🔹 SHOW PRODUCTS */}
        {activeCollectionId && (
          <>
            <button
              onClick={onBack}
              className="mb-6 text-[#b8860b] hover:underline"
            >
              ← Back to Categories
            </button>

            {loadingProducts ? (
              <p>Loading products...</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product) => (
                  <ProductCard key={product?.productId} product={product} goldPrice={goldPrice} />
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

export default CategoryGrid;
