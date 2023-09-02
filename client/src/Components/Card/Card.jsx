import React from 'react'
import "./Card.css"


const Card = (props) => {
  const {name, description, image} = props
  console.log(props.name)
  return (
    <div className="card" key={name}>
      <img src={image} alt="Loading" />
      <div className="news-content">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card
