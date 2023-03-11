import React from "react";

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="w-full h-56 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-4 py-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base font-medium text-colorTextSecundary">
          {date} - {location}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
