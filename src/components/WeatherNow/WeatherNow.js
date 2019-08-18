import React, { useContext } from "react";
import { AppStateContext } from "../../providers/app.provider";
import Time from "../Time/Time";
import "./WeatherNow.scss";

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
      {appState.todaysWeather.weather[0].description}

      {/* {appState.todaysWeather.main.humidity} */}
      {/* // temp={appState.todaysWeather.main.temp} */}
    </div>
  ) : null;
};

export default WeatherNow;
