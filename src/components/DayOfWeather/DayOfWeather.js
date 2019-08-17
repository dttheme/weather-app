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
        {tempArray && (
          <Chart
            dayOfTheWeek={dayOfTheWeek}
            tempArray={tempArray}
            timeArray={timeArray}
          />
        )}
      </div>
      <div className="dayOfWeather__groupedHours">
        {weatherArray.map(item => {
          //   console.log(item);
          const time = moment(item.dt_txt).format("h a");
          tempArray.push(item.main.temp);
          timeArray.push(time);
          // console.log(timeArray);
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
