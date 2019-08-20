import React, { useEffect, useState } from "react";

import moment from "moment";

const Time = () => {
  const [time, setTime] = useState();
  // On component load, get the time and format it
  useEffect(() => {
    setTime(moment().format("LLLL"));
  }, []);
  return <div>{time}</div>;
};
export default Time;
