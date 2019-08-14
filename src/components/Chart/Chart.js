import React, { useEffect } from "react";
import * as d3 from "d3";

const Chart = ({ dayOfTheWeek }) => {
  let h = 300;
  let w = 700;

  const drawChart = () => {
    const data = [12, 5, 3, 7, 1, 21, 7];
    const svg = d3
      .select(`.${dayOfTheWeek}`)
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
    // svg
    //   .selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append(text => text)
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => h - 10 * d - 3);
  };
  useEffect(() => {
    drawChart();
  });
  return (
    <div>
      <div>HELLO!</div>
    </div>
  );
};
export default Chart;
