import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planets, search}) {
  const filterSearch = planets.filter((planet) => {
    return(
      planet.name.toLowerCase().includes(search.toLowerCase())
    )
  })
  return (
    <ul className="cards">
      {filterSearch.map((planet) => {
        return(
          <Planeteer planet = {planet}/>
        )
      })}
    </ul>
  );
}

export default PlaneteersContainer;
