import React from "react";
import New from "./New";

const news = [
  {
    title: "Conferencia de Robótica",
    date: "15 de abril de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Charla sobre Inteligencia Artificial",
    date: "28 de mayo de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Taller de Programación en Python",
    date: "12 de junio de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
];

const NewsList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((newData) => (
        <New
          key={newData.title}
          title={newData.title}
          date={newData.date}
          location={newData.location}
          image={newData.image}
        />
      ))}
    </div>
  );
};

export default NewsList;
