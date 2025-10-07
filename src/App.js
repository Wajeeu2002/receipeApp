import './App.css';

import React, { useEffect, useState } from "react";
import Receipe from "./receipe";

export default function App() {
  const [receipe, setReceipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  let app_id = "fc30398c";
  let app_key = "459d470114eec64e7f00cff78143fe2b";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReceipe(data.hits);
        console.log(data.hits);
      });
  }, [query]);
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search">
        <input
          onChange={handleChange}
          className="typing"
          type="text"
          value={search}
          placeholder="Search Food"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <article className="article">
        {receipe.map((food, index) => {
          return (
            <Receipe
              key={index}
              title={food.recipe.label}
              img={food.recipe.image}
              ingredient={food.recipe.ingredients}
            />
          );
        })}
      </article>
    </div>
  );
}
