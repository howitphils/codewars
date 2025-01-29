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

function hero(bullets, dragons) {
  //Get Coding!
  return dragons * 2 <= bullets;
}

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

const stringToNumber = function (str) {
  // put your code here
  return Number(str);
};

function isIsogram(str) {
  //...
  return (
    str
      .toLowerCase()
      .split("")
      .findIndex((l, i, arr) => arr.indexOf(l) !== arr.lastIndexOf(l)) === -1
  );
}

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return Number(inputString.split(" ")[0]);
}

function checkForFactor(base, factor) {
  // code here
  return base % factor === 0;
}

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

function strCount(str, letter) {
  //code here
  return str.split("").filter((l) => l === letter).length;
}

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

var number = function (array) {
  //your awesome code here
  return array.map((l, i) => `${i + 1}: ${l}`);
};

function sumDigPow(a, b) {
  // Your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i < 10) {
      arr.push(i);
    } else {
      const sum = String(i)
        .split("")
        .reduce((acc, curr, i) => acc + Number(curr) ** (i + 1), 0);
      if (i === sum) {
        arr.push(i);
      }
    }
  }
  return arr;
}

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
  // your code here
}

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

function SeriesSum(n) {
  // Happy Coding ^_^
  // let sum = 0;
  // let addition = 4;
  // for (let i = 0; i < n; i++) {
  //   if (i === 0) {
  //     sum += 1;
  //   } else {
  //     sum += 1 / addition;
  //     addition += 3;
  //   }
  // }
  // return sum.toFixed(2);
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

function sum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);
}

function stray(numbers) {
  return numbers.find((n, i, arr) => arr.indexOf(n) === arr.lastIndexOf(n));
}

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

function check(a, x) {
  return a.includes(x);
}

function updateLight(current) {
  let arr = ["green", "yellow", "red"];
  let index = arr.indexOf(current);
  return index === arr.length - 1 ? arr[0] : arr[index + 1];
}

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

var uniqueInOrder = function (iterable) {
  // if (typeof iterable === "string") {
  //   iterable = iterable.split("");
  // }
  return [...iterable].filter((l, i, arr) => l !== arr[i + 1]);
};

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join("");
};

function openOrSenior(data) {
  return data.map((member) =>
    member[0] >= 55 && member[1] > 7 ? "Senior" : "Open"
  );
  // ...
}

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

function unusualFive() {
  return ["a", "b", "c", "d", "e"].length;
}

function removeEveryOther(arr) {
  return arr.filter((a, i, arr) => i % 2 === 0);
}

function correct(string) {
  return string
    .split("")
    .map((l) => {
      if (l === "5") {
        return "S";
      } else if (l === "0") {
        return "O";
      } else if (l === "1") {
        return "I";
      }
      return l;
    })
    .join("");
}

function sortArray(array) {
  const sortedOdds = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  return array.map((n) => {
    if (n % 2 !== 0) {
      return sortedOdds.shift();
    }
    return n;
  });
  // Return a sorted array.
}

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

function reverseList(list) {
  return list.reverse();
}

function addBinary(a, b) {
  return (a + b).toString(2);
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
  // May the Force be with you
};

function expressionMatter(a, b, c) {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
  return; // highest achievable result
}

// write the function isAnagram
var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

function gimme(triplet) {
  const target = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(target);
}

function getCount(str) {
  return str.split("").filter((l) => /^[aeiou]$/i.test(l)).length;
}

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq) !== Math.floor(Math.sqrt(sq))) return -1;
  return Math.pow(Math.sqrt(sq) + 1, 2);
}

function doubleChar(str) {
  return str
    .split("")
    .map((l) => `${l}${l}`)
    .join("");
  // Your code here
}

function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
  //loading...
}

function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

function roundToNext5(n) {
  // ...
  let b = n;
  while (b % 5 !== 0) {
    b += 1;
  }
  return b;
}

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

function move(position, roll) {
  return position + roll * 2;
  // return the new position
}

function arithmetic(a, b, operator) {
  //your code here!
  switch (operator) {
    case "add": {
      return a + b;
    }
    case "subtract": {
      return a - b;
    }
    case "multiply": {
      return a * b;
    }
    case "divide": {
      return a / b;
    }
  }
}

function duplicateCount(text) {
  //...
  return text
    .toLowerCase()
    .split("")
    .filter((l, i, arr) => arr.indexOf(l) === i && arr.lastIndexOf(l) !== i)
    .length;
}

function sayHello(name) {
  return `Hello, ${name}`;
}

function position(letter) {
  return `Position of alphabet: ${
    "abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1
  }`;
  //Write your own Code!
}

function count(string) {
  // TODO
  let obj = {};

  string.split("").forEach((l) => {
    if (obj[l]) {
      obj[l] = obj[l] + 1;
    } else {
      obj[l] = 1;
    }
  });

  return obj;
}

function order(words) {
  let arr = [];
  words.split(" ").forEach((word) => {
    const index = Number(word.split("").filter(Number)[0]) - 1;
    arr[index] = word;
  });
  return arr.join(" ");
  // ...
}

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
  // Write your code here
}

function getChar(c) {
  return String.fromCharCode(c);
  // ...
}

function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
  // Return your answer
};

function warnTheSheep(queue) {
  const targetIndex = queue.reverse().findIndex((item) => item === "wolf");
  return targetIndex === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${targetIndex}! You are about to be eaten by a wolf!`;
}

function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
  // TODO
}

function findAverage(array) {
  // your code here
  if (!array.length) return 0;
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}

function getVolumeOfCuboid(length, width, height) {
  // your code here
  return length * width * height;
}

function litres(time) {
  return Math.floor(time / 2);
}

function sumDigits(number) {
  return String(Math.abs(number))
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

function howMuchILoveYou(nbPetals) {
  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
    nbPetals % 6
  ];
  // your code
}

function sumStr(a, b) {
  return String(+a + +b);
}

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

function findSmallestInt(arr) {
  // return arr.sort((a, b) => a - b)[0];
  return Math.min(...arr);
}

function longestConsec(strarr, k) {
  let answ = "";
  strarr.forEach((item, i, arr) => {
    let currConc = "";
    for (let j = 0; j < k; j++) {
      if (arr[j + i] === undefined) return;
      currConc += arr[j + i];
    }
    if (currConc.length > answ.length) {
      answ = currConc;
    }
  });
  return answ;
  // your code
}

function getMiddle(s) {
  //Code goes here!
  return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}

function binToDec(bin) {
  return parseInt(bin, 2);
  // TODO
}

function checkExam(array1, array2) {
  let answ = 0;
  array2.forEach((item, i) => {
    if (item !== "") {
      if (item === array1[i]) {
        answ += 4;
      } else {
        answ -= 1;
      }
    }
  });
  return answ < 0 ? 0 : answ;
}

var capitals = function (word) {
  let answ = [];
  word.split("").forEach((l, i) => {
    if (l.toUpperCase() === l) {
      answ.push(i);
    }
  });
  return answ;
  // Write your code here
};
function diamond(n) {
  if (n < 0 || n % 2 === 0) return null;
  let answ = "";
  let spaces = Math.floor(n / 2);
  for (let i = 1; i <= n; i += 2) {
    answ += " ".repeat(spaces) + "*".repeat(i) + "\n";
    if (i < n) {
      spaces -= 1;
    }
  }
  for (let i = n - 2; i > 0; i -= 2) {
    spaces += 1;
    answ += " ".repeat(spaces) + "*".repeat(i) + "\n";
  }
  return answ;
}

function greet(name, owner) {
  return name === owner ? `Hello boss` : "Hello guest";
  // Add code here
}

function remove(string) {
  //coding and coding....
  return string[string.length - 1] === "!" ? string.slice(0, -1) : string;
}

function arrayDiff(a, b) {
  return a.filter((n) => !b.includes(n));
}

function findOdd(A) {
  //happy coding!
  for (let i = 0; i < A.length; i++) {
    if (A.filter((n) => n === A[i]).length % 2 !== 0) {
      return A[i];
    }
  }
}

function addLength(str) {
  return str.split(" ").map((w) => w + " " + w.length);
  //start-here
}

function towerBuilder(nFloors) {
  let arr = [];
  let spaces = nFloors - 1;
  let stars = 1;
  for (let i = 0; i < nFloors; i++) {
    arr.push(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));
    stars += 2;
    spaces -= 1;
  }
  return arr;
  // build here
}

function reverse(string) {
  return string.split(" ").reverse().join(" ");
  //your code here
}

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
  //your code here
}

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

function xor(a, b) {
  // TODO: Program Me
  return a === b ? false : true;
}

function capitalize(s) {
  return [
    s
      .split("")
      .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
      .join(""),
    s
      .split("")
      .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
      .join(""),
  ];
}

function removeUrlAnchor(url) {
  // TODO: complete
  return url.split("#")[0];
}

function dnaStrand(dna) {
  return dna
    .split("")
    .map((l) => {
      if (l === "C") {
        return "G";
      } else if (l === "G") {
        return "C";
      } else if (l === "A") {
        return "T";
      } else if (l === "T") {
        return "A";
      }
    })
    .join("");
}

function take(arr, n) {
  return arr.slice(0, n);
}

function persistence(num) {
  //code me
  let count = 0;
  let number = num;
  while (String(number).length > 1) {
    number = String(number)
      .split("")
      .map(Number)
      .reduce((a, b) => a * b);
    count += 1;
  }

  return count;
}

function solve(s) {
  if (s.split("").filter((l) => l.toLowerCase() === l).length >= s.length / 2) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

function rentalCarCost(d) {
  // Your solution here
  if (d >= 3 && d < 7) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  } else {
    return d * 40;
  }
}

function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

function abbrevName(name) {
  return (
    name.split(" ")[0][0].toUpperCase() +
    "." +
    name.split(" ")[1][0].toUpperCase()
  );
  // code away
}

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (Number(n) >= 5 ? "1" : "0"))
    .join("");
}

function mergeArrays(arr1, arr2) {
  return arr1
    .concat(arr2.filter((n) => !arr1.includes(n)))
    .sort((a, b) => a - b);
}

function reverseLetter(str) {
  //coding and coding..
  const alph = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .filter((l) => alph.includes(l))
    .reverse()
    .join("");
}

const multiplicationTable = function (size) {
  // let answ = [];
  // let arrToPush = [];

  // for (let i = 1; i <= size; i++) {
  //   for (let j = i; j <= size * i; j += i) {
  //     arrToPush.push(j);
  //   }
  //   answ.push(arrToPush);
  //   arrToPush = [];
  // }

  // return answ;
  // insert code here

  multiplicationTable = function (size) {
    let res = [];

    for (let i = 1; i <= size; i++) {
      res[i - 1] = [];
      for (let j = i; j <= size * i; j += i) {
        res[i - 1].push(j);
      }
    }

    return res;
    // insert code here
  };
};

function nameShuffler(str) {
  //Shuffle It
  return str.split(" ").reverse().join(" ");
}

function findAverage(nums) {
  // Code here
  return nums.reduce((a, b) => a + b) / nums.length;
}

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : "World"
  }!`;
}

function solution(str, ending) {
  return str.endsWith(ending);
  // TODO: complete
}

function factorial(n) {
  //your code here
  let answ = 1;
  for (let i = n; i > 0; i--) {
    answ *= i;
  }
  return answ;
}

function toBinary(n) {
  return Number(n.toString(2));
}

function nbYear(p0, percent, aug, p) {
  // your code
  let answ = 0;
  let curr = p0;
  while (curr < p) {
    curr = Math.floor(curr + (curr * percent) / 100 + aug);
    answ += 1;
  }
  return answ;
}

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const obj = {
    scissors: "rock",
    paper: "scissors",
    rock: "paper",
  };

  return obj[p2] === p1 ? "Player 1 won!" : "Player 2 won!";
};

("use strict");

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let arr = [];
  array.forEach((item) => {
    arr.push(...item);
  });
  return arr.sort((a, b) => a - b);
}

function include(arr, item) {
  return arr.includes(item);
  // ...
}

function mxdiflg(a1, a2) {
  if (a1.length < 1 || a2.length < 1) return -1;
  let diff = 0;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      let currDiff = Math.abs(a1[i].length - a2[j].length);
      if (currDiff > diff) {
        diff = currDiff;
      }
    }
  }
  return diff;
  // your code
}

function getRealFloor(n) {
  return n <= 0 ? n : n > 13 ? n - 2 : n - 1;
}

function distinct(a) {
  return [...new Set(a)];
}

function high(x) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  let highest = 0;
  let answ = "";
  x.split(" ").forEach((word) => {
    let currSum = 0;
    word.split("").forEach((l) => {
      currSum += alph.indexOf(l) + 1;
    });
    if (currSum > highest) {
      highest = currSum;
      answ = word;
    }
  });
  return answ;
}

console.log(high("aa bbb asdadqw xxzx asdq")); //
