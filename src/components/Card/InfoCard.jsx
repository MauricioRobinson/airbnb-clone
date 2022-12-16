import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-out first:border-t py-2">
      <div className="relative w-40 h-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt="Image info card"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 w-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="w-5 h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
