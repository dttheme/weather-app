import "./Header.scss";

import React, { useContext, useEffect, useState } from "react";

import { AppStateContext } from "../../providers/app.provider";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";

const Header = () => {
  const [appState, setAppState] = useContext(AppStateContext);
  const [starActive, setStarActive] = useState(false);
  let currentFavs = appState.favorites || [];
  const itemToFav = [appState.cityLatLong, appState.cityName];

  useEffect(() => {
    // Check if item is already in favorites
    if (currentFavs.length && currentFavs.containsArray(itemToFav)) {
      setStarActive(true);
    }
  }, [appState, itemToFav, currentFavs]);

  const handleFavoriteStar = () => {
    if (currentFavs.length && currentFavs.containsArray(itemToFav)) {
      // TODO: Remove current item from favorites array if it already exists
      // let newArray = currentFavs.map(k => k.filter(item => item !== itemToFav));
      // console.log(newArray);
      console.log("Already exists in favorites");
    } else {
      currentFavs.push(itemToFav);
      console.log("Adding to favorites");
    }
    setAppState(prevState => ({
      ...prevState,
      favorites: currentFavs
    }));
  };

  return (
    <div className="header">
      <h1>
        <Link to="/" className="header__link">
          Weather
          {appState.cityName ? ` in ${appState.cityName}` : null}
        </Link>
        {appState.cityName && (
          <button
            onClick={handleFavoriteStar}
            className={`header__star favorite${starActive}`}
          >
            <MdStar />
          </button>
        )}
      </h1>
      <Search />
      <Nav />
    </div>
  );
};

export default Header;
