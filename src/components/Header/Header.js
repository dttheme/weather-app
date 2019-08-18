import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppStateContext } from "../../providers/app.provider";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import Favorites from "../Favorites/Favorites";
import "./Header.scss";
import { MdStar } from "react-icons/md";

const Header = () => {
  const [appState, setAppState] = useContext(AppStateContext);
  let currentFavs = appState.favorites;
  const handleFavorite = () => {
    currentFavs.push(appState.cityName);
    setAppState(prevState => {
      return {
        ...prevState,
        favorites: currentFavs
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("myFavorites", JSON.stringify(appState.favorites));
  }, [appState.favorites]);

  return (
    <div className="header">
      <h1>
        <Link to="/" className="header__link">
          Weather
          {appState.cityName ? ` in ${appState.cityName}` : null}
        </Link>
        {appState.cityName && (
          <button onClick={handleFavorite}>
            <MdStar />
          </button>
        )}
      </h1>
      <Favorites favorites={appState.favorites} setFavorites={setAppState} />
      <Search />
      <Nav />
    </div>
  );
};

export default Header;
