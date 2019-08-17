import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppStateContext } from "../../providers/app.provider";
import "./Nav.scss";

const Nav = () => {
  const [appState] = useContext(AppStateContext);
  return (
    <ul className="nav">
      {appState.todaysForecast && (
        <li className="nav__today nav__link">
          <Link to="/">Today</Link>
        </li>
      )}
      {appState.groupedData &&
        Object.keys(appState.groupedData).map(dayOfTheWeek => {
          return (
            <li className="nav__link" key={dayOfTheWeek}>
              <Link to={`/${dayOfTheWeek.toLowerCase()}`}>{dayOfTheWeek}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Nav;
