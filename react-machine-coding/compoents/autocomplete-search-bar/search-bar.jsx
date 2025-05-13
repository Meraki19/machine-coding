import React, { useEffect, useState, useRef } from "react";
import "./style.css";
const SearchBar = () => {
  const [recepies, setRecepies] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  const inputref = useRef(null);
  let timer;
  const fetchData = async (searchinput) => {
    if (localStorage.getItem(searchinput)) {
      let data = JSON.parse(localStorage.getItem(searchinput));
      setRecepies(data.recipes);
      setDisplayList(true);
    } else {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchinput}`
      );
      const data = await res.json();
      if (data) {
        localStorage.setItem(searchinput, JSON.stringify(data));
        setRecepies(data.recipes);
        setDisplayList(true);
      }
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputref.current && !inputref.current.contains(event.target)) {
        setDisplayList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="search-container">
      <div>
        <img src="https://www.reliablesoft.net/wp-content/uploads/2023/10/google-search-engine.webp" />
      </div>
      <div ref={inputref} className="search-section">
        <input
          type="text"
          onFocus={() => {
            setDisplayList(true);
          }}
          onChange={(e) => {
            if (e.target.value !== "") {
              clearTimeout(timer);
              timer = setTimeout(() => {
                fetchData(e.target.value);
              }, 300);
            } else {
              setRecepies([]);
            }
          }}
        />
        {displayList && (
          <div className="recipe-list-results">
            {recepies.map((recepieItem) => {
              return (
                <div key={recepieItem.name} className="recipe-name">
                  <p>{recepieItem.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
