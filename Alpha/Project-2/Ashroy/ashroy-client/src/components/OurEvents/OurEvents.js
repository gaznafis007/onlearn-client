import React, { useEffect, useState } from "react";
import EventLayout from "./EventLayout";

const OurEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);
  return (
    <section className="my-4">
      <h1 className="text-2xl  sm:text-3xl p-4  md:text-4xl lg:text-6xl text-center font-semibold font-poppins capitalize">
        our events
      </h1>
      <hr className="border-b-2 sm:border-b-4 lg:border-b-8 w-16 mx-auto  border-purple-600" />
      <div className="my-6">
        {events.map((event, index) => {
          return (
            <EventLayout
              key={event.id}
              event={event}
              index={index}
            ></EventLayout>
          );
        })}
      </div>
    </section>
  );
};

export default OurEvents;
