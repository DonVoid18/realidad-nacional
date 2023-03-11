import React from "react";

const NewsGrid = ({ news }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {news.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <div
            className="bg-gray-200 h-48 w-full"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <p className="text-gray-500 text-sm">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
