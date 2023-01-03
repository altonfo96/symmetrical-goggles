import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planets,setPlanets] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    const request = async() =>{
      let req = await fetch("http://localhost:8003/planeteers")
      let res = await req.json()
      setPlanets(res)
      console.log(res)
    } 
    request()
  },[])
  
  return (
    <div>
      <Header />
      <SearchBar search = {search} setSearch = {setSearch}/>
      <RandomButton />
      <PlaneteersContainer planets = {planets} search = {search}/>
    </div>
  );
}

export default App;
