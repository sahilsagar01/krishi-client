import React from "react";
import { lifestyleData } from "../../DummyData"; // Update the path
import "./NatinalNews.css"
import Card from "../Card/Card";

const nationalNews = () => {
  return (
    <div className="LocalNews">
      <h2 className="heading">राष्ट्रीय समाचार</h2>
      <div className="cardContainer">
        {lifestyleData.map(
          (data) => (
            <Card />
          )
          // <div className="card" key={data.title}>
          //   <img src={data.cover} alt="Loading" />
          //   <div className="card-content">
          //     <h5>{data.title}</h5>
          //     <p>{data.description}</p>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default nationalNews;
