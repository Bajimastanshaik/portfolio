import React from "react";

function Card({ image, title }) {
  return (
    <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
      />

      {/* Title */}
      <p className="mt-2 text-sm sm:text-base md:text-lg font-medium text-center">
        {title}
      </p>
    </div>
  );
}

export default Card;
