import React, { useContext } from "react";

import { AppStateContext } from "../../providers/app.provider";
import DayOfWeather from "../DayOfWeather/DayOfWeather";
import { Route } from "react-router-dom";
import WeatherNow from "../WeatherNow/WeatherNow";

const WeatherWrapper = () => {
  const [appState] = useContext(AppStateContext);
  return (
    <>
      {/* Route for weather now */}
      <Route exact path="/" component={WeatherNow} />
      {/* Routes for each day in the forcast */}
      {appState.groupedData &&
        Object.entries(appState.groupedData).map(aDayOfWeatherData => {
          return (
            <Route
              key={aDayOfWeatherData[0]}
              path={`/${aDayOfWeatherData[0].toLowerCase()}`}
              render={props => (
                <DayOfWeather
                  {...props}
                  key={aDayOfWeatherData[0]}
                  dayOfTheWeek={aDayOfWeatherData[0]}
                  weatherArray={aDayOfWeatherData[1]}
                />
              )}
            />
          );
        })}
    </>
  );
};

export default WeatherWrapper;
