import React, { useContext } from "react";
import { Route } from "react-router-dom";

import DayOfWeather from "../DayOfWeather/DayOfWeather";
import { AppStateContext } from "../../providers/app.provider";

const WeatherWrapper = () => {
  const [appState, setAppState] = useContext(AppStateContext);
  return (
    appState.groupedData &&
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
    })
  );
};

export default WeatherWrapper;
