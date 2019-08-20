import "./HourOfDay.scss";

import { WiHumidity, WiThermometer } from "react-icons/wi";

import React from "react";

const HourOfDay = ({ time, temp, humidity, desc, icon }) => {
  return (
    <ul className="hourOfDay">
      <li>{time}</li>
      <li>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={desc} />
      </li>
      <li className="hourOfDay__desc">{desc}</li>
      <li>
        <WiThermometer className="hourOfDay__icon" />
        {temp}°
      </li>
      <li>
        <WiHumidity className="hourOfDay__icon" />
        {humidity}%
      </li>
    </ul>
  );
};

export default HourOfDay;
