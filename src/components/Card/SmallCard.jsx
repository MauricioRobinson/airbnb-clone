import Image from "next/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt={"Explore nearby image"}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
