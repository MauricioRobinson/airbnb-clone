import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { format } from "date-fns";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSearch = (e) => {
    const { name, value } = e.target;

    setSearchInput(value);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleGuests = (e) => {
    const { value } = e.target;

    setNumberOfGuests(value);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
    setSearchInput("");
  };

  return (
    <header className="w-full shadow-md sticky top-0 px-4 grid grid-cols-3 z-50 md:px-4 md:py-2 bg-white">
      <div
        onClick={() => router.push("/")}
        className="relative w-20 h-14 cursor-pointer my-auto">
        <Image
          src={"https://links.papareact.com/qd3"}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="my-auto">
        <div className="md:border-2 md:border-red-400 rounded-full py-2 flex items-center md:shadow-sm">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearch}
            placeholder={"Start your search"}
            className="outline-none pl-5 bg-transparent flex-grow text-gray-600 placeholder-gray-400"
          />
          <MagnifyingGlassCircleIcon className="w-8 h-8 text-red-400 p-1 cursor-pointer hidden md:inline-flex md:mx-2" />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 hidden md:inline" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="w-6 h-6" />
          <UsersIcon className="w-6 h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center justify-between mb-6 border-b">
            <h2 className="text-xl pl-2 font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="w-6 h-6 text-black" />
            <input
              type="number"
              onChange={handleGuests}
              value={numberOfGuests}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="mb-8">
            <div className="flex">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500">
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
