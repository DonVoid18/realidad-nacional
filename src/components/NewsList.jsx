import React from "react";
import New from "./New";
import newsData from "../data/news.json";
const news = newsData;

const NewsList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((newData) => (
        <New
          key={newData.title}
          title={newData.title}
          date={newData.published_date}
          location={newData.country}
          image={newData.media}
          link={newData.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
