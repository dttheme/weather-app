import React, { useState, useEffect } from "react";
import moment from "moment";

const Time = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    setTime(moment().format("LLLL"));
  }, []);
  return <div>{time}</div>;
};
export default Time;
