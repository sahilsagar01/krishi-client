import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LocalNews.css"
import Card from "../Card/Card";
import {lifestyleData} from "../../DummyData"


const LocalNews = () => {

  const [newsLocal, setNewsLocal] = useState([]);

  useEffect(() => {
    const fetchLocalNews = async() => {
     try{
      const api = `http://localhost:5002`;
      const localNews = await axios.get(api)
      console.log(localNews.data)
      setNewsLocal(localNews.data)
     }
     catch(err){
      console.log(err)
     }
    }
    fetchLocalNews();
  },[])

  return (
    <div className="LocalNews">
      <h2 className="heading">स्थानीय समाचार</h2>
      <div className="cardContainer">
        {newsLocal.map((data) => <Card
        name={data.name}
        description={data.description}
        image={data.image}
         />
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

export default LocalNews;
