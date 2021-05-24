const convertToMoney = (num) => {
  return parseInt(num).toLocaleString();
};

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ":" + rminutes + ":00";
}

export { convertToMoney, timeConvert };
