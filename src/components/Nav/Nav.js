import "./Nav.scss";

import React, { useContext } from "react";

import { AppStateContext } from "../../providers/app.provider";
import { Link } from "react-router-dom";

const Nav = () => {
  const [appState] = useContext(AppStateContext);
  return (
    <ul className="nav">
      {appState.todaysWeather && (
        <Link to="/" className="nav__today nav__link">
          <li>Now</li>
        </Link>
      )}
      {appState.groupedData &&
        Object.keys(appState.groupedData).map(dayOfTheWeek => {
          return (
            <Link
              key={dayOfTheWeek}
              className="nav__link"
              to={`/${dayOfTheWeek.toLowerCase()}`}
            >
              <li>{dayOfTheWeek}</li>
            </Link>
          );
        })}
    </ul>
  );
};

export default Nav;
