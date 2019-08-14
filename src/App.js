import React, { useEffect, useState } from "react";
import DayOfWeather from "./components/DayOfWeather/DayOfWeather";
import moment from "moment";
// import * as d3 from "d3";
import "./App.scss";

// TODO:
// - Tabs with days of the week, routes to DayOfWeather for each day

const groupByDayOfWeek = array => {
  return array.reduce((accumulator, current) => {
    let dayOfTheWeek = moment(current.dt_txt).format("dddd");
    if (!accumulator[dayOfTheWeek]) {
      accumulator[dayOfTheWeek] = [current];
    } else {
      accumulator[dayOfTheWeek].push(current);
    }
    return accumulator;
  }, {});
};

function App() {
  const [cityName, setCityName] = useState("");
  const [groupedData, setGroupedData] = React.useState(undefined);

  const fetchWeatherAPI = async (lat, lon) => {
    console.log(lat, lon);
    await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${
        process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }&units=imperial`
    )
      .then(response => response.json())
      .then(data => {
        setCityName(data.city.name);
        setGroupedData(groupByDayOfWeek(data.list));
        // console.log(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      fetchWeatherAPI(position.coords.latitude, position.coords.longitude);
    });
    // fetchWeatherAPI(30312);
  }, []);

  // let h = 300;
  // let w = 700;

  // const drawChart = () => {
  //   const data = [12, 5, 3, 7, 1, 21, 7];
  //   const svg = d3
  //     .select("body")
  //     .append("svg")
  //     .attr("width", w)
  //     .attr("height", h);
  //   svg
  //     .selectAll("rect")
  //     .data(data)
  //     .enter()
  //     .append("rect")
  //     .attr("x", (d, i) => i * 70)
  //     .attr("y", (d, i) => h - 10 * d)
  //     .attr("width", 25)
  //     .attr("height", (d, i) => d * 10)
  //     .attr("fill", "green");
  //   svg
  //     .selectAll("text")
  //     .data(data)
  //     .enter()
  //     .append(text => text)
  //     .attr("x", (d, i) => i * 70)
  //     .attr("y", (d, i) => h - 10 * d - 3);
  // };
  // useEffect(() => {
  //   drawChart();
  // });

  console.log(groupedData);
  return (
    <div className="app">
      HELLO {cityName}
      <div>
        {groupedData &&
          Object.entries(groupedData).map(aDayOfWeatherData => {
            return (
              <DayOfWeather
                key={aDayOfWeatherData[0]}
                dayOfTheWeek={aDayOfWeatherData[0]}
                weatherArray={aDayOfWeatherData[1]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
