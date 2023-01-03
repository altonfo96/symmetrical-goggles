import React, { useState } from "react";

function Planeteer({planet}) {
  const [toggle,setToggle] = useState(false)
  
  const flip =()=>{
    setToggle((toggle) => !toggle)
  }
 
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planet.pictureUrl}
          alt={planet.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planet.name}</div>
          <p onClick = {flip} className="card__text">{toggle?planet.bio:planet.quote}</p>
          <div className="card__detail">
            <p>{planet.twitter}</p>
            <p>
              {
                planet.fromUSA?"USA-Based":"Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;

