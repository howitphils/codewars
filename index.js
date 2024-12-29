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

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
); // 61000
