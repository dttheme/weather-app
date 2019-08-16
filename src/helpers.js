import moment from "moment";

export const groupByDayOfWeek = array => {
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
