import React, { useEffect } from "react";
import * as d3 from "d3";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const fetchWeatherAPI = async (lat, lon) => {
  //   console.log(lat, lon);
  //   await fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${
  //       process.env.REACT_APP_OPEN_WEATHER_API_KEY
  //     }&units=imperial`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       // setCityName(data.city.name);
  //       // setGroupedData(groupByDayOfWeek(data.list));
  //       console.log(data);
  //     })
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     fetchWeatherAPI(position.coords.latitude, position.coords.longitude);
  //   });
  //   // fetchWeatherAPI(30312);
  // }, []);

  const drawChart = () => {
    const data = [12, 5, 3, 7, 1, 21, 7];
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect");
  };
  useEffect(() => {
    drawChart();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
