import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Van.css";

function Van() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/post") // Replace with the actual backend endpoint for fetching news
      .then((response) => {
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const renderNewsByCategory = (category) => {
    return (
      <div id={category} className="LocalNewsVan">
        <h2 className="heading">{category}</h2>
        <div className="cardContainer">
          {newsData.map((data) => {
            if (data.category === category) {
              return (
                <div className="card" key={data._id}>
                  <img src={data.image} alt="Loading" />
                  <div className="card-content">
                    <h5>{data.name}</h5>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            }
            // if (data.category !== category){
            return null;
            // }
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Rest of your component JSX */}
      {renderNewsByCategory("राष्ट्रीय समाचार")}
      {renderNewsByCategory("प्रादेशिक समाचार")}
      {renderNewsByCategory("वन विभाग की योजनाएं")}
      {renderNewsByCategory("वन विभाग में नवाचार")}
      {renderNewsByCategory("आदिवासी समाचार")}
      {renderNewsByCategory("सफलता की कहानियां")}
      {renderNewsByCategory("देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी")}
      {renderNewsByCategory("वनोपज से संबंधित जानकारी")}
      {/* Section Navigation */}
      <div className="section-navigation">
        <h2 className="heading">इस पृष्ठ पर</h2>
        <ul>
          <li>
            <a href="#राष्ट्रीय समाचार">राष्ट्रीय समाचार</a>
          </li>
          <li>
            <a href="#प्रादेशिक समाचार">प्रादेशिक समाचार</a>
          </li>
          <li>
            <a href="#वन विभाग की योजनाएं">वन विभाग की योजनाएं</a>
          </li>
          <li>
            <a href="#वन विभाग में नवाचार">वन विभाग में नवाचार</a>
          </li>
          <li>
            <a href="#आदिवासी समाचार">
              वर्ग में रहने वाले आदिवासियों की दी जा रही सुविधाएं
            </a>
          </li>
          <li>
            <a href="#सफलता की कहानियां">सफलता की कहानियां</a>
          </li>
          <li>
            <a href="#देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी">
              देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी
            </a>
          </li>
          <li>
            <a href="#वनोपज से संबंधित जानकारी">वनोपज से संबंधित जानकारी</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Van;
