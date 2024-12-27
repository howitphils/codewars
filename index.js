function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

function removeChar(str) {
  //You got this!
  return str.substring(1, str.length - 1);
}

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
};

var summation = function (num) {
  let number = 0;
  for (let i = 1; i <= num; i++) {
    number += i;
  }
  return number;
};

function invert(array) {
  return array.map((num) => -num);
}
function points(games) {
  return games.reduce((acc, curr) => {
    if (curr[0] > curr[2]) {
      return acc + 3;
    } else if (curr[0] === curr[2]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

function positiveSum(arr) {
  return arr.reduce((acc, curr) => {
    if (curr > 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
}

console.log(
  positiveSum([
    -24, -90, 60, 58, -53, 2, -86, -27, 84, -40, -7, -93, 21, -2, 22, 47, -59,
    -10, -44, 43, -71, -64, 6, -50, 55, 93, -83, 95, 79, 85, 31, -13, -67, 41,
    47, -74, -3, 52, -7, 3, 28, -2, 16, -75, -45, -27, 93, -76, 21, 86, 13, -62,
    -19, 72, -35, 74, 29, 32, -96, -14, 51, 58, 40, -45, -23, 40, -89, -9, -32,
    29, 93, -64, -73, 10, 28, -19, -52, -42, -4, 52, 45, -25, 4, 75, -70, 50,
    -18, 57, 29, 84, 20, -34, -60, -9,
  ])
); // 20
