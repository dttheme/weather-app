import { Line } from "react-chartjs-2";
import React from "react";

const Chart = ({ tempArray, timeArray }) => {
  const data = {
    labels: timeArray,
    datasets: [
      {
        label: "Tempurature Forecast",
        lineTension: 0.2,
        backgroundColor: "rgba(236, 110, 76, .5)",
        borderColor: "#ec6e4c",
        borderCapStyle: "butt",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        data: tempArray
      }
    ]
  };
  return <Line data={data} />;
};
export default Chart;
