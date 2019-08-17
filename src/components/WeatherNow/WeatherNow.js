import React, { useContext } from "react";
import { AppStateContext } from "../../providers/app.provider";
import HourOfDay from "../HourOfDay/HourOfDay";
import Time from "../Time/Time";
import "./WeatherNow.scss";

const WeatherNow = () => {
  const [appState] = useContext(AppStateContext);

  return appState.todaysForecast ? (
    <div className="now">
      <Time />
      <div className="now__temp">
        {`${appState.todaysForecast.main.temp.toFixed()}°`}
      </div>
      {appState.todaysForecast.weather[0].description}

      <img
        src={`http://openweathermap.org/img/wn/${
          appState.todaysForecast.weather[0].icon
        }.png`}
      />
      {/* humidity={appState.todaysForecast.main.humidity} */}
      {/* icon={appState.todaysForecast.weather[0].icon} */}
      {/* // temp={appState.todaysForecast.main.temp} */}
    </div>
  ) : null;
};

export default WeatherNow;
