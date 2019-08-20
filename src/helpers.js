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

// Hash to check value of array inside of array
// Returns boolean
Array.prototype.containsArray = function(val) {
  var hash = {};
  for (var i = 0; i < this.length; i++) {
    hash[this[i]] = i;
  }
  return hash.hasOwnProperty(val);
};
