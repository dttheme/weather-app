import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppStateContext } from "../../providers/app.provider";
import "./Nav.scss";

const Nav = () => {
  const [appState] = useContext(AppStateContext);
  return (
    <ul className="nav">
      {appState.todaysWeather && (
        <Link to="/" className="nav__today nav__link">
          <li>Today</li>
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
