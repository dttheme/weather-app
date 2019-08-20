import "./WeatherNow.scss";

import React, { useContext } from "react";

import { AppStateContext } from "../../providers/app.provider";
import Time from "../Time/Time";
import { WiHumidity } from "react-icons/wi";

const WeatherNow = () => {
  const [appState] = useContext(AppStateContext);

  return appState.todaysWeather ? (
    <div className="now">
      <Time />
      <div className="now__temp">
        {`${appState.todaysWeather.main.temp.toFixed()}°`}
      </div>
      <img
        alt={appState.todaysWeather.weather[0].description}
        src={`http://openweathermap.org/img/wn/${
          appState.todaysWeather.weather[0].icon
        }.png`}
      />
      <div>{appState.todaysWeather.weather[0].description}</div>
      <div>
        <WiHumidity />
        {appState.todaysWeather.main.humidity}%
      </div>
    </div>
  ) : null;
};

export default WeatherNow;
