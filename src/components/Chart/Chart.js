import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ dayOfTheWeek, tempArray }) => {
  let data = {
    datasets: [
      {
        label: "Tempurature",
        backgroundColor: "rgb(255, 99, 132)",
        data: tempArray
      }
    ]
  };
  return (
    <div>
      <div>HELLO!</div>
      <Line data={data} />
    </div>
  );
};
export default Chart;
