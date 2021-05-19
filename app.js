function convertFahrToCelsius(val) {
    let celsiusVal;
  let tempVal = val; 
  
  if (typeof tempVal === "string") {
    tempVal = Number(tempVal);
    celsiusVal = Number(((tempVal - 32) * (5 / 9)).toFixed(4));
    return celsiusVal;
  }
    if (Array.isArray(tempVal)) {
    return `${JSON.stringify(tempVal)} is not a valid number but a/an array.`;
  }
    if (typeof tempVal !== "number" || typeof Number(tempVal) !== "number")
    return `${JSON.stringify(
      tempVal
    )} is not a valid number but a/an ${typeof tempVal}.`;
  
  celsiusVal = Number(((tempVal - 32) * (5 / 9)).toFixed(4));
  return celsiusVal;
}
const sol1 = convertFahrToCelsius(0);
const sol2 = convertFahrToCelsius("0");
const sol3 = convertFahrToCelsius([1, 2, 3]);
const sol4 = convertFahrToCelsius({ temp: 0 });

console.log(sol1);
console.log(sol2);
console.log(sol3);
console.log(sol4);