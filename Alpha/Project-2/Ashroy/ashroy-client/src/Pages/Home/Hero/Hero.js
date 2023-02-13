import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../../assets/team-ashroy.jpg";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={heroStyle}
      className="min-h-screen xs:min-h-screen w-full sm:bg-cover"
    >
      <div className="w-full min-h-screen xs:min-h-screen bg-gradient-to-r from-gray-800/75 to-gray-700/50 flex justify-center items-center flex-col">
        <h2 className="text-center text-4xl lg:text-6xl text-white font-poppins font-semibold animate-pulse">
          আশ্রয়-The helping hand
        </h2>
        <h3 className="text-3xl text-center font-semibold font-poppins my-4 text-primary ">
          Sharing happiness for better living.
        </h3>
        <Link
          to="/"
          className="capitalize px-6 py-3 border-2 text-lg font-poppins  border-primary text-white hover:bg-primary rounded-md"
        >
          donate
        </Link>
      </div>
    </div>
  );
};

export default Hero;
