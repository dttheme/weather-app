import React from "react";
import moment from "moment";
import HourOfDay from "../HourOfDay/HourOfDay";
import Chart from "../Chart/Chart";
import "./DayOfWeather.scss";

const DayOfWeather = ({ dayOfTheWeek, weatherArray }) => {
  const tempArray = [],
    timeArray = [];
  return (
    <div className={`dayOfWeather ${dayOfTheWeek}`}>
      <h2>{dayOfTheWeek}</h2>
      <div>
        {tempArray && <Chart tempArray={tempArray} timeArray={timeArray} />}
      </div>
      <div className="dayOfWeather__groupedHours">
        {weatherArray.map(item => {
          // format time in hours
          const time = moment(item.dt_txt).format("h a");
          // push time and temp into arrays, which are then passed to the line chart
          tempArray.push(item.main.temp);
          timeArray.push(time);
          return (
            <HourOfDay
              key={item.dt}
              temp={Math.floor(item.main.temp)}
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
