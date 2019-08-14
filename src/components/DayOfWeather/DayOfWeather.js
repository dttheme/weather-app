import React from "react";
import moment from "moment";
import HourOfDay from "../HourOfDay/HourOfDay";
import Chart from "../Chart/Chart";
import "./DayOfWeather.scss";

const DayOfWeather = ({ dayOfTheWeek, weatherArray }) => {
  return (
    <div className={`dayOfWeather ${dayOfTheWeek}`}>
      <h2>{dayOfTheWeek}</h2>
      <div>
        <Chart dayOfTheWeek={dayOfTheWeek} />
      </div>
      <div className="dayOfWeather__groupedHours">
        {weatherArray.map(item => {
          console.log(item);
          const time = moment(item.dt_txt).format("h a");
          // console.log(time);
          return (
            <HourOfDay
              key={item.dt}
              temp={item.main.temp}
              icon={item.weather[0].icon}
              humidity={item.main.humidity}
              time={time}
              desc={item.weather[0].description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayOfWeather;
