import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-32 py-14">
        <div className="space-y-4 text-xs text-gray-600">
          <h5 className="font-bold uppercase">About</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-600">
          <h5 className="font-bold uppercase">Community</h5>
          <p>Accesibility</p>
          <p>This is not a real site</p>
          <p>Its pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>MarsDev</p>
        </div>
        <div className="space-y-4 text-xs text-gray-600">
          <h5 className="font-bold uppercase">Host</h5>
          <p>MarsDev</p>
          <p>Presents</p>
          <p>Full Stack Hero</p>
          <p>Help others</p>
          <p>Always learning</p>
        </div>
        <div className="space-y-4 text-xs text-gray-600">
          <h5 className="font-bold uppercase">Support</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Covid-19</p>
          <p>Donate</p>
          <p>Contact</p>
        </div>
        <div></div>
      </div>
      <div className="border-t py-2 border-t-gray-400 flex items-center justify-center px-8">
        <p className="text-gray-500 flex flex-col items-center gap-2">
          <small className="flex-grow">
            &copy; Mauricio Robinson (MarsDev).
          </small>
          <small className="flex-grow flex">
            Mukiiii <HeartIcon className="text-red-600 w-6 h-6" />
          </small>
          <small className="flex-grow">Sonny Sangha Master 🙏🏻</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
