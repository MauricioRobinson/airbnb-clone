import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="w-full shadow-md sticky top-0 px-4 grid grid-cols-3 z-50 md:px-4 md:py-2">
      <div className="relative w-24 h-20 cursor-pointer my-auto">
        <Image
          src={"/img/airbnb-logo.png"}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="my-auto">
        <div className="md:border-2 md:border-red-400 rounded-full py-2 flex items-center md:shadow-sm">
          <input
            type="search"
            placeholder="Start your search"
            className="outline-none pl-5 bg-transparent flex-grow text-gray-600 placeholder-gray-400"
          />
          <MagnifyingGlassCircleIcon className="w-8 h-8 text-red-400 p-1 cursor-pointer hidden md:inline-flex md:mx-2" />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 w-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="w-6 h-6" />
          <UsersIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
