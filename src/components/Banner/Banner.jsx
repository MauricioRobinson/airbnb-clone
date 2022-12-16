import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:[600px] xl:h-[700px] 2xl:h-[900px]">
      <Image
        src={"https://links.papareact.com/0fm"}
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        priority={true}
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="bg-white text-purple-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-300">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
