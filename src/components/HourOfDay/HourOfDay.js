import React from "react";
import "./HourOfDay.scss";

const HourOfDay = ({ time, temp, humidity, desc, icon }) => {
  return (
    <div className="hourOfDay">
      <div>{time}</div>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={desc} />
      <div>{desc}</div>
      <ul>
        <li>{temp}</li>
        <li>{humidity}%</li>
      </ul>
    </div>
  );
};

export default HourOfDay;
