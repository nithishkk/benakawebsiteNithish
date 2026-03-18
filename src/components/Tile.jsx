import React from "react";

const Tile = ({ src, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl border border-[#e8d5a9]
      shadow-md cursor-pointer transition-all hover:-translate-y-1"
    >
      <img
        src={src}
        alt={label}
        className="h-72 w-full object-cover transition-transform duration-700
        group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-6 left-5">
        <h3 className="text-white text-xl font-semibold">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default Tile;
