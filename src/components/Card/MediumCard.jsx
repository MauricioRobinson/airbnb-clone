import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-64 h-64">
        <Image
          src={img}
          alt="Card image"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-xl mt-3 font-semibold">{title}</h3>
    </div>
  );
};

export default MediumCard;
