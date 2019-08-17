import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppStateContext } from "../../providers/app.provider";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header = () => {
  const [appState] = useContext(AppStateContext);
  return (
    <div className="header">
      <h1>
        <Link to="/" className="header__link">
          Weather
          {appState.cityName ? ` in ${appState.cityName}` : null}
        </Link>
      </h1>
      <Search />
      <Nav />
    </div>
  );
};

export default Header;
