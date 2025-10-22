// first version

const repeatStringNumTimes = (string, number) => {
  let accu = [];
  let i = number;
  if(i <= 0) {
    return "";
  } else {
    while (i > 0) {
    i--;
    accu.push(string)
  };
  return accu.join("")
  }
  
};

console.log(repeatStringNumTimes("hello", 4));

// Version amméliorée

const repeatStringNumTimes = (string, number) => {
  let result = "";
  while (number > 0) {
    result += string;
    number--;
  }
  return result;
};
