import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { groupByDayOfWeek } from "../../helpers";
import { AppStateContext } from "../../providers/app.provider";

const Header = () => {
  const [appState, setAppState] = useContext(AppStateContext);
  const fetchWeatherAPI = async (lat, lon) => {
    // console.log(lat, lon);
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${
        process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }&units=imperial`
    )
      .then(response => response.json())
      .then(data => {
        setAppState({
          cityName: data.city.name,
          groupedData: groupByDayOfWeek(data.list)
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      fetchWeatherAPI(position.coords.latitude, position.coords.longitude);
    });
  }, [appState.cityName]);

  //   console.log(AppContext);
  //   return null;
  return appState.groupedData !== undefined ? (
    <div>
      HELLO {appState.cityName}
      <div>
        {Object.keys(appState.groupedData).map(dayOfTheWeek => {
          return (
            <Link key={dayOfTheWeek} to={`/${dayOfTheWeek.toLowerCase()}`}>
              {dayOfTheWeek}
            </Link>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Header;
