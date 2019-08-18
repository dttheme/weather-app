import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ tempArray, timeArray }) => {
  const data = {
    labels: timeArray,
    datasets: [
      {
        label: "Tempurature Forecast",
        // lineTension: 0.5,
        // backgroundColor: "rgba(75,192,192,0.4)",
        // borderColor: "rgba(75,192,192,1)",
        // borderCapStyle: "butt",
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: "miter",
        // pointBorderColor: "rgba(75,192,192,1)",
        // pointBackgroundColor: "#fff",
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: "rgba(75,192,192,1)",
        // pointHoverBorderColor: "rgba(220,220,220,1)",
        // pointHoverBorderWidth: 2,
        // pointRadius: 1,
        // pointHitRadius: 10,
        data: tempArray
      }
    ]
  };
  return <Line data={data} />;
};
export default Chart;
