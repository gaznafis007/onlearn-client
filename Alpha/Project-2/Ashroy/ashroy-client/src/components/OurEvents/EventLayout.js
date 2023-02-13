import React from "react";
import { Link } from "react-router-dom";

const EventLayout = ({ event, index }) => {
  return (
    <>
      <div
        className={`flex justify-around items-center md:items-start my-12 px-6 mx-8 ${
          index > 0
            ? "flex-col md:flex-row-reverse"
            : "flex-col-reverse md:flex-row"
        }`}
      >
        <div className="w-full my-4 sm:my-0 sm:w-1/3">
          <h2 className="text-3xl text-center sm:text-left">{event.name}</h2>
          <p className="my-6">
            {event.description.slice(0, 200) + "..."} <br />
          </p>
          <p className="mt-1 inline-block bg-primary px-4 py-3 rounded-md shadow-md text-white ">
            <Link to="/">আরো দেখুন</Link>
          </p>
        </div>
        <div className="w-full sm:w-1/3 shadow-xl rounded-lg">
          {/* <p className="bg-white p-8 rounded-md shadow-lg">
            {event.description}
          </p> */}
          <img src={event.img} alt="img" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default EventLayout;
