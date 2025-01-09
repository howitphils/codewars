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

function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`);
}

function rowSumOddNumbers(n) {
  let sum = 0;
  let lastNumber = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        sum += lastNumber;
      }
      lastNumber += 2;
    }
  }
  return sum;
}

function longest(s1, s2) {
  let newStr = s1 + s2;
  return newStr
    .split("")
    .sort()
    .filter((l, i, arr) => i === arr.lastIndexOf(l))
    .join("");
}

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .reverse()
    .join(" ");
}

function makeNegative(num) {
  return num > 0 ? -num : num;
}

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

function printerError(s) {
  return s.split("").filter((l) => l > "m").length;
}

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

function descord(n) {
  return Number(n.toString().split("").sort().reverse().join(""));
}

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((n) => parseInt(n) ** 2)
    .join("");
}

function highAndLow(numbers) {
  const newNumbers = numbers
    .split(" ")
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
  return `${newNumbers[newNumbers.length - 1]} ${newNumbers[0]}`;
}

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

function countBy(x, n) {
  let z = [];
  let b = x;
  for (let i = 0; i < n; i++) {
    z.push(b);
    b += x;
  }
  return z;
}

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

function stringToArray(string) {
  return string.split(" ");
}

function smash(words) {
  return words.join(" ");
}

function XO(str) {
  let x = 0;
  let o = 0;
  str.split("").forEach((l) => {
    if (l.toLowerCase() === "x") {
      x += 1;
    } else if (l.toLowerCase() === "o") {
      o += 1;
    }
  });
  return x === o;
}

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length <
    yourPoints
  );
}

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

function validatePIN(pin) {
  if (pin.match(/\s/)) return false;
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  return !pin.split("").map(Number).includes(NaN);
  //return true or false
}

function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}
function sumMix(x) {
  return x.map(Number).reduce((acc, curr) => acc + curr, 0);
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((l) => (word.indexOf(l) === word.lastIndexOf(l) ? "(" : ")"))
    .join("");
}

function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((l, i) => l.toUpperCase() + l.repeat(i))
    .join("-");
}

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((n, i, arr) => Number(n + "0".repeat(arr.length - 1 - i)))
    .filter((n) => n !== 0)
    .join(" + ");
}

function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? "even" : "odd";
  //enter code here
}

const quarterOf = (month) => {
  // Your code here
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  // your code here
  let count = 0;
  let sum = 0;
  input.forEach((n) => {
    if (n > 0) {
      count++;
    } else if (n < 0) {
      sum += n;
    }
  });
  return [count, sum];
}

function enough(cap, on, wait) {
  // your code here
  return on + wait > cap ? on + wait - cap : 0;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
  // your code here
}
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
  //Good Luck!
}

function removeSmallest(numbers) {
  if (!numbers.length) return [];
  const smallest = [...numbers].sort((a, b) => a - b).shift();
  return numbers.filter((n, i, arr) => i !== arr.indexOf(smallest));
}

function setAlarm(employed, vacation) {
  if (employed) {
    if (vacation) {
      return false;
    }
    return true;
  }
  return false;
}

function solution(string) {
  return string
    .split("")
    .map((l) => {
      if (l !== l.toLowerCase()) {
        return ` ${l}`;
      }
      return l;
    })
    .join("");
}

function hoopCount(n) {
  //your code goes here
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

function bmi(weight, height) {
  const calc = weight / height ** 2;
  if (calc <= 18.5) {
    return "Underweight";
  } else if (calc <= 25) {
    return "Normal";
  } else if (calc <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(200, 1.8));
