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

function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  array.forEach((n, i) => {
    if (i % 2 === 0) {
      team1 += n;
    } else {
      team2 += n;
    }
  });
  return [team1, team2];
  //your code here
}

function minValue(values) {
  return +[...new Set(values)].sort((a, b) => a - b).join("");
  //your code here
}

function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
  // do magic
}

function multipleOfIndex(array) {
  return array.filter((n, i) => n % i === 0 || n === 0);
}

function multiTable(number) {
  let answ = "";
  for (let i = 1; i <= 10; i++) {
    answ += `${i} * ${number} = ${i * number}${i !== 10 ? "\n" : ""}`;
  }
  return answ;
  // good luck
}

function factorial(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
  // Calculate the factorial here
}

function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError();
  }
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
  // Calculate the factorial here
}

function testEven(n) {
  return n % 2 === 0;
  //Your awesome code here!
}

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
  // Code here
}
function hexToDec(hexString) {
  //your code here
  return parseInt(hexString, 16);
}

function noOdds(values) {
  return values.filter((n) => n % 2 === 0);
  // Return all non-odd values
}

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

function array(string) {
  return string.split(",").slice(1, -1).join(" ") || null;
  // TODO
}

var encryptThis = function (text) {
  // Implement me! :)
  return text
    .split(" ")
    .map((word) => {
      if (word.length === 1) {
        return word.charCodeAt();
      } else if (word.length === 2) {
        return word[0].charCodeAt() + word[1];
      } else {
        return (
          word[0].charCodeAt() +
          word[word.length - 1] +
          word.slice(2, -1) +
          word[1]
        );
      }
    })
    .join(" ");
};

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 === 0);
  // filter out the odd numbers
}

function filter_list(l) {
  return l.filter((a) => typeof a === "number");
  // Return a new array with the strings filtered out
}

String.prototype.isUpperCase = function () {
  let answ = true;
  this.split(" ").forEach((word) => {
    if (word.split("").filter((l) => l !== l.toUpperCase()).length > 0) {
      answ = false;
    }
  });
  return answ;
  // your code here
};

function cubeChecker(volume, side) {
  return volume > 0 && side > 0 ? Math.cbrt(volume) === side : false;
}

function spEng(sentence) {
  return sentence.toLowerCase().split("english").length > 1;
  //write your code here
}

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
  // your code
}

function sumOfMinimums(arr) {
  // let sum = 0;
  // arr.forEach((arr) => {
  //   sum += arr.sort((a, b) => a - b)[0];
  // });
  // return sum;
  // // your code here
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}

// Create the combineNames function here
function combineNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function sumMul(n, m) {
  if (m <= n) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
  //your idea here
}

function check(a, x) {
  return a.includes(x);
}

function wordsToMarks(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return string
    .split("")
    .reduce((acc, curr) => acc + alphabet.indexOf(curr) + 1, 0);
  //your code here
}

function remove(string) {
  // const reversed = string.split("").reverse();
  // const index = reversed.findIndex((l) => l !== "!");
  // return reversed.slice(index).reverse().join("");
  return s.replace(/!+$/, "");
}

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

function solve(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const vowels = "aeiou";
  let highest = 0;

  s.split("")
    .map((l) => (vowels.includes(l) ? " " : l))
    .join("")
    .trim()
    .split(" ")
    .forEach((str) => {
      let currSum = 0;
      str.split("").forEach((l) => {
        currSum += alphabet.indexOf(l) + 1;
      });
      if (currSum > highest) {
        highest = currSum;
      }
    });
  return highest;
}

function whatday(num) {
  if (num < 1 || num > 7) return "Wrong, please enter a number between 1 and 7";
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // put your code here

  return arr[num - 1];
}

function largestPairSum(numbers) {
  //TODO: Write your Code here
  const sorted = numbers.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function validateUsr(username) {
  if (username.length < 4 || username.length > 16) return false;
  const res = /^[a-z0-9_]+$/.test(username); //regex here/.test(username)
  return res;
}

function mango(quantity, price) {
  let sum = 0;
  for (let i = 1; i <= quantity; i++) {
    if (i % 3 !== 0) {
      sum += price;
    }
  }
  return sum;
}

var countSheep = function (num) {
  //your code here
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

function likes(names) {
  // TODO
  if (!names.length) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

function printerError(s) {
  // your code
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let mist = s
    .split("")
    .filter((l) => alphabet.indexOf(l) > alphabet.indexOf("m")).length;
  return `${mist}/${s.length}`;
}

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
  // code here
}

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

function incrementString(strng) {
  let arrRev = strng.split("").reverse();
  let numArr = [];
  for (let i = 0; i < arrRev.length; i++) {
    if (arrRev[i] === "0" || parseInt(arrRev[i])) {
      numArr.push(arrRev[i]);
    } else {
      break;
    }
  }

  const newNum = String(Number(numArr.reverse().join("")) + 1);

  return (
    strng.slice(
      0,
      newNum.length > numArr.length ? -numArr.length : -newNum.length
    ) + newNum
  );
}

function multiply(number) {
  //your code here
  return number * Math.pow(5, String(Math.abs(number)).length);
}

function problem(x) {
  //your code here
  if (typeof x === "string") return "Error";
  return x * 50 + 6;
}

function stringClean(s) {
  // Function will return the cleaned string
  return s
    .split("")
    .filter((l) => l !== "0" && !parseInt(l))
    .join("");
}
function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}

function adjacentElementsProduct(array) {
  let highest = array[0] * array[1];
  array.forEach((n, i, arr) => {
    if (n * arr[i + 1] > highest) {
      highest = n * arr[i + 1];
    }
  });
  return highest;
}

function findEvenIndex(arr) {
  return arr.findIndex(
    (n, i, arr) =>
      arr.slice(0, i).reduce((a, b) => a + b, 0) ===
      arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0)
  );
}

function lowercaseCount(str) {
  //How many?
  // return str.split("").filter((l) => /^[a-z]+$/.test(l)).length;
  return (str.match(/[a-z]/g) || []).length;
}

function remove(string) {
  //coding and coding....
  return string.replaceAll("!", "") + "!";
}

function isSortedAndHow(array) {
  return array[0] === Math.min(...array)
    ? "yes, ascending"
    : array[0] === Math.max(...array)
    ? "yes, descending"
    : "no";
}

function defineSuit(card) {
  // good luck
  let obj = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };
  return obj[card[card.length - 1]];
}

function vowelIndices(word) {
  //your code here
  return word
    .toLowerCase()
    .split("")
    .reduce((acc, curr, i) => {
      if (/[aeiouy]/gi.test(curr)) {
        acc.push(i + 1);
      }
      return acc;
    }, []);
}

function shortenToDate(longDate) {
  // your code here
  return longDate.split(",")[0];
}

function minSum(arr) {
  // your code here
  let sum = 0;
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 1; i <= arr.length / 2; i++) {
    sum += sorted[i - 1] * sorted[arr.length - i];
  }

  return sum;
}

function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, curr, i, arr) => {
      if (!isNaN(arr[i + 1])) {
        console.log("acc: ", acc);
        console.log("curr: ", curr);
        acc += curr - arr[i + 1];
      }
      return acc;
    }, 0);
}

var greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`;
};

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((l) => alphabet.includes(l))
    .map((l) => alphabet.indexOf(l) + 1)
    .join(" ");
}

function digPow(n, p) {
  // let arr = String(n).split("").map(Number);
  // let sum = 0;
  // for (let i = 0, j = p; i < arr.length; i++) {
  //   sum += arr[i] ** j;
  //   j += 1;
  // }
  // return sum % n === 0 ? sum / n : -1;

  let sum = String(n)
    .split("")
    .reduce((acc, curr, i) => acc + Math.pow(curr, p + i), 0);
  return sum % n ? -1 : sum / n;
  // ...
}

function twoDecimalPlaces(n) {
  // Your code here
  return +n.toFixed(2);
}

function noBoringZeros(n) {
  // your code
  return Number(String(n).replace(/0+$/, "")) || 0;
}

function findLongest(array) {
  // code here
  return array.find(
    (n) => String(n).length === String(Math.max(...array)).length
  );
}

function toCsvText(array) {
  // good luck
  return array.join("\n");
}

function encode(string) {
  return string.replace(/[aeiou]/g, (x) => "_aeiou".indexOf(x));
}

function decode(string) {
  return string.replace(/[1-5]/g, (x) => "_aeiou".charAt(x));
}

function getSize(width, height, depth) {
  return [
    2 * width * height + 2 * height * depth + 2 * width * depth,
    width * depth * height,
  ];
}

function isVow(a) {
  return a.map((n) =>
    "aeiou".includes(String.fromCharCode(n)) ? String.fromCharCode(n) : n
  );
}

function predictAge(...params) {
  // your code
  return Math.floor(
    Math.sqrt(params.map((n) => n * n).reduce((acc, curr) => acc + curr, 0)) / 2
  );
}

function cookie(x) {
  return `Who ate the last cookie? It was ${
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog"
  }!`;
  // ...
}

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count === 0) return "0=0";
    if (count < 0) return `${count}<0`;
    let sum = "0";
    let sum2 = 0;
    for (let i = 1; i <= count; i++) {
      sum += `+${i}`;
      sum2 += i;
    }
    return sum + ` = ${sum2}`;
  };

  return SequenceSum;
})();

function replace(s) {
  //coding and coding....
  return s.replace(/[aeiouAEIOU]/g, "!");
}

function digits(n) {
  // TODO
  return String(n).length;
}

function sumCubes(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
  // ...
}

function greet(language) {
  let db = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return db[language] || "Welcome";
}

function switcheroo(x) {
  return x
    .split("")
    .map((l) => (l === "a" ? "b" : l === "b" ? "a" : l))
    .join("");
}

const heh = () => {
  // add the value "codewars" to the websites array 1,000 times
  let websites = [];
  for (let i = 0; i < 1000; i++) {
    websites.push("codewars");
  }
};

function odds(values) {
  // arrow it
  return values.filter((n) => n % 2 !== 0);
}

function partlist(arr) {
  // your code
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    let copy = [...arr];
    newArr.push([copy.splice(0, i).join(" "), copy.join(" ")]);
  }
  return newArr;
}

function filterString(value) {
  //Complete this function :)
  return +value.replace(/[a-z]/g, "");
}

function printArray(array) {
  //show me the code!
  return array.join(",");
}

function countRedBeads(n) {
  //your code here
  if (n < 2) return 0;
  let count = 0;
  for (let i = 1; i < n; i++) {
    count += 2;
  }
  return count;
}

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? n % m : m % n;
}

function smallEnough(a, limit) {
  return !a.filter((n) => n > limit).length;
}

function bump(x) {
  return x.replaceAll("_", "").length > 15 ? "Car Dead" : "Woohoo!";
}

function solve(arr) {
  //code
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map((word) => {
    let count = 0;
    word
      .toLowerCase()
      .split("")
      .forEach((l, i) => {
        if (alphabet.indexOf(l) === i) {
          count += 1;
        }
      });
    return count;
  });
}

var Ball = function (ballType) {
  // your code goes here
  this.ballType = ballType || "regular";
};

const ball = new Ball();

function numberToPower(number, power) {
  let newNum = 1;
  for (let i = 0; i < power; i++) {
    newNum *= number;
  }
  return newNum;
  // Code here
}

function contamination(text, char) {
  // Code here ;)
  return text.replace(/./g, char);
}

function remove(s, n) {
  //coding and coding....
  // return s
  //   .split("")
  //   .map((l) => {
  //     if (n > 0 && l === "!") {
  //       n -= 1;
  //       return "";
  //     } else {
  //       return l;
  //     }
  //   })
  //   .join("");

  for (let i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  return s;
}

function billboard(name, price = 30) {
  let cost = 0;
  for (let i = 0; i < name.length; i++) cost += price;
  return cost;
}

function alphabetWar(fight) {
  let objLeft = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  let objRight = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let left = 0;
  let right = 0;
  fight.split("").forEach((l) => {
    if (objLeft[l]) {
      left += objLeft[l];
    } else if (objRight[l]) {
      right += objRight[l];
    }
  });
  return left === right
    ? "Let's fight again!"
    : left > right
    ? "Left side wins!"
    : "Right side wins!";
}

function highestRank(arr) {
  //Your Code logic should written here
  let answer = 0;
  let highestCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr.filter((n) => n === arr[i]).length;
    if (count > highestCount) {
      highestCount = count;
      answer = arr[i];
    } else if (count === highestCount && answer < arr[i]) {
      answer = arr[i];
    }
  }
  return answer;
}

String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

function generateShape(integer) {
  // let str = "";
  // for (let i = 0; i < integer; i++) {
  //   if (i === integer - 1) {
  //     str += "+".repeat(integer);
  //   } else {
  //     str += "+".repeat(integer) + "\n";
  //   }
  // }
  // return str;
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
  // return n > 0 ? Math.sqrt(n) / Math.floor(Math.sqrt(n)) === 1 : n === 0; // fix me
};

var templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};

const orderedCount = function (text) {
  // Implement me!
  const repeated = [];
  const answer = [];
  const strArr = text.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (!repeated.includes(strArr[i])) {
      answer.push([strArr[i], strArr.filter((l) => l === strArr[i]).length]);
      repeated.push(strArr[i]);
    }
  }
  return answer;
};

function sortMyString(S) {
  // your code here
  return S.split("")
    .reduce(
      (acc, curr, i) => {
        if (i % 2 === 0) {
          acc[0] += curr;
        } else {
          acc[1] += curr;
        }
        return acc;
      },
      ["", ""]
    )
    .join(" ");
}

const reverse2 = function (array) {
  // TODO: program me!
  return array.map((l, i, arr) => arr[arr.length - (i + 1)]);
};

function isDigit(s) {
  //your code
  return /^-?\d*\.?\d+$/.test(s);
}

function cubeOdd(arr) {
  // insert code here >.<
  if (arr.find((item) => typeof item !== "number")) return undefined;
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 1 || curr % 2 === -1) {
      acc += Math.pow(curr, 3);
    }
    return acc;
  }, 0);
}

function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
}

console.log(maxDiff([1, 2, 3, 4, 5, 6, -20]));
