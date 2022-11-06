// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() == "r") {
//     name += " plays banjo";
//   } else {
//     name += " does not play banjo";
//   }
//   return name;
// }

// areYouPlayingBanjo("Red");

// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(2);
// console.log(a);
// console.log(arr);
// let b = arr.splice(2, 2);
// console.log(b);

// перша цифра то з якого елементу, друга цифра то скільки видалити, третя цифра і інші то які числа додати в масив
// arr.splice(3, 1, 25, "35", true, undefined, null, [1, 2], {});
// arr.push(10, 15);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// function num(...name) {
//   let sum = 0;
//   for (let i = 0; i < name.length; i++) {
//     sum = i + sum;
//   }
//   return console.log(sum);
// }

// num(0, 1, 2, 3, 4, 5, 6, 7, 8);
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name) {
//   let arr = name.split(" ");
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i].charAt(0));
//   }
//   let result = arr1.join(".").toUpperCase();
//   return result;
// }

// abbrevName("peter sam");
// ------------------------------------------------------------------------------------
// const wallet = {
//   name: "Oleh Chernenko",
//   bitcoin: {
//     name: "Bitcoin",
//     logo: '<img src="./img/Bitcoin.png" alt="bitcoin">',
//     amount: 5,
//     rate: 705000.37,
//   },
//   ethereum: {
//     name: "Ethereum",
//     logo: '<img src="./img/Ethereum.png" alt="Ethereum">',
//     amount: 4,
//     rate: 47367.65,
//   },
//   stellar: {
//     name: "Stellar",
//     logo: '<img src="./img/Stellar.png" alt="Stellar">',
//     amount: "100",
//     rate: 4.18,
//   },
//   show(nameOfCrypto) {
//     for (item in wallet) {
//       if (item == nameOfCrypto) {
//         const owner = document.getElementById("owner");
//         const crypto = document.getElementById("typeOfCrypto");
//         const logo = document.getElementById("logo");
//         const amountOfCrypto = document.getElementById("amount");
//         const total = document.getElementById("result");
//         owner.innerHTML = `Доброго дня ${this.name}!`;
//         crypto.innerHTML = `Назва криптовалюти: ${this[item].name} `;
//         logo.innerHTML = this[item].logo;
//         amountOfCrypto.innerHTML = `На вашому гаманці: ${this[item].amount} ${this[item].name}`;
//         total.innerHTML = `Якщо сьогодні продасте всю крипту, у вас буде: ${
//           this[item].amount * this[item].rate
//         } гривень`;
//       }
//     }

//     // console.log(`Доброго дня ${this.name}! На вашому рахунку ${nameOfCrypto}`);
//   },
// };
// // console.log(owner);
// wallet.show("bitcoin");
// wallet.show("stellar");
// wallet.show("ethereum");

// function generateRandomColor() {
//   //RGB
//   // FF0000
//   // 00FF00
//   // 0000FF
//   const hexCodes = "0123456789ABCDEFG";
//   let color = "";
//   for (let i = 0; i < 6; i++) {
//     color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//   }
//   return "#" + color;
// }

// let columns = document.getElementsByClassName("col");
// for (let i = 0; i < columns.length; i++) {
//   columns[i].style.background = generateRandomColor();
// }
// -------------------------------------------------------------------------------
// const simpleStr = "abc";
// const objstr = new String("abc");

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// const leftTop = new Point(0, 0);
// const topPoint = new Point(10, 10);
// const rightBottom = new Point(30, 30);

// console.log(Point);
// console.log(leftTop);
// console.log(topPoint);
// console.log(rightBottom);

// function Calculator(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Calculator.prototype.read = function () {
//   this.x = +prompt("Введіть x");
//   this.y = +prompt("Введіть y");
//   return `x=${this.x}, y=${this.y}`;
// };

// Calculator.prototype.sum = function () {
//   return this.x + this.y;
// };

// Calculator.prototype.mul = function () {
//   return this.x * this.y;
// };

// const test = new Calculator();
// console.log(test.read());
// console.log(test.sum());
// console.log(test.mul());

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToNumber = function (str) {
//   return Number(str);
// };

// console.log(typeof stringToNumber("-1235"));
// let numbers = [3, 2, 13, 4, 22, 33];

// numbers.forEach((num) => {
//   if (num % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
//     return true;
//   } else if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// lovefunc(1, 4);

// function getGrade(s1, s2, s3) {
// let average = (65 + 73 + 49) / 3;
// if (average >= 90 && average < 101) {
//   console.log(`average: ${average} - "A"`);
// }
// if (average >= 80 && average < 90) {
//   console.log(`average: ${average} - "B"`);
// }

// if (average >= 70 && average < 80) {
//   console.log(`average: ${average} - "C"`);
// }

// if (average >= 60 && average < 70) {
//   console.log(`average: ${average} - "D"`);
// }

// if (average < 60) {
//   console.log(`average: ${average} - "F"`);
// }
// }

// getGrade(95, 95, 100);

// function switchItUp(number) {
//   switch (true) {
//     case number == 1:
//       return "One";
//     case number == 2:
//       return "Two";
//     case number == 3:
//       return "Three";
//     case number == 4:
//       return "Four";
//     case number == 5:
//       return "Five";
//     case number == 6:
//       return "Six";
//     case number == 7:
//       return "Seven";
//     case number == 8:
//       return "Eight";
//     case number == 9:
//       return "Nine";
//     default:
//       return "idk what is this number";
//   }
// }

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) {
//     return 100;
//   }
//   if (exam > 75 && projects >= 5) {
//     return 90;
//   }
//   if (exam > 50 && projects >= 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// }

// let arr = [5, 10, 15, 20, 25, 30, 35, 40];

// console.log(arr.indexOf(33));
// let str = "23.07.1997";
// console.log(str.split(".").reverse().join("."));

// let now = new Date();
// let myDate = new Date(str.split(".").reverse().join("."));
// let d = new Date("07.23.1997");
// alert((now - d).getFullYear());

// let totalSeconds = Math.floor((now - myDate) / 1000);
// let minutes = Math.floor(totalSeconds / 60) % 60;
// let hours = Math.floor(totalSeconds / 3600) % 24;
// let days = totalSeconds / 3600;
// days = Math.floor(days / 24);
// console.log(`Total seconds: ${totalSeconds}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`hours: ${hours}`);
// console.log(`days ${days}`);
// console.dir(now);
// console.log(now.getFullYear() - myDate.getFullYear());
// console.log(Math.floor((now - 1997) / 1000 / 3600 / 24));

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true ]

// function countSheeps(arrayOfSheep) {
//   let number = 0;
//   // let result = arrayOfSheep.filter((el) => el === true);
//   // return console.log(result, number);
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       number++;
//     }
//   }
//   return number;
// }

// countSheeps([
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]);
// function getLargestExpressionResult(a, b) {
//   const addition = a + b; // -6
//   const subtraction = a - b; // -4
//   const multiplication = a * b; // 5
//   const division = a / b; // 5
//   if (
//     addition > subtraction &&
//     addition > multiplication &&
//     addition > division
//   ) {
//     console.log(addition);
//   }
//   if (
//     subtraction > addition &&
//     subtraction > multiplication &&
//     subtraction > division
//   ) {
//     console.log(subtraction);
//   }
//   if (
//     multiplication > addition &&
//     multiplication > subtraction &&
//     multiplication > division
//   ) {
//     console.log(multiplication);
//   }
//   if (
//     division > addition &&
//     division > subtraction &&
//     division > multiplication
//   ) {
//     console.log(division);
//   }
// }
// getLargestExpressionResult(-5, -1);
// function printNumbersBackwards(N) {
//   // write code here
//   for (let i = N; i > 0; i--) {
//     console.log(i);
//   }
// }
// printNumbersBackwards(5);

// function getDrinks(numberOfGuests) {
//   // write code here
//   let result = 0;
//   for (let i = 1; i <= numberOfGuests; i++) {
//     result += i;
//   }
//   console.log(result);
// }
// getDrinks(2);
// function calculateProfit(amount, percent, period) {
//   // write code here
//   let result = amount;
//   for (let i = 1; i <= period; i++) {
//     // result = amount * percent;
//     result += result * (percent / 100);
//   }
//   console.log(result - amount);
// }

// calculateProfit(1000, 5, 1); // 50
// calculateProfit(12500, 3, 12); // 5322

// let amount = 12500;
// let percent = 0.03;
// let result = amount;

// for (let i = 1; i <= 12; i++) {
//   amount += amount * 0.03;
//   console.log(amount);
// }
// console.log(amount - result);
// function isSubstring(phrase, part) {
//   // phrase = phrase.toLowerCase();
//   // part = part.toLowerCase();
//   return console.log(phrase.toLowerCase().includes(part.toLowerCase()));
// }
// isSubstring("Abc", "abc");

// function countMs(text) {
//   // write code here
//   let result = 0;
//   for (const item of text) {
//     if (item.includes("m") || item.includes("M")) {
//       result++;
//     }
//   }
//   return console.log(result);
// }
// countMs("document"); // 1
// countMs("Mermaid"); // 2 — потрібно рахувати і 'm', і 'M'
// countMs("code"); // 0
// || item.includes(e) || item.includes(i) || item.includes(o) || item.includes(u) || item.includes(y)
// function removeVowels(doc) {
//   // write code here
//   let result = "";
//   for (const item of doc) {
//     if (
//       item === "a" &&
//       item === "e" &&
//       item === "i" &&
//       item === "o" &&
//       item === "u" &&
//       item === "y"
//     ) {
//       result += result = "";
//     } else {
//       result += result + item;
//     }
//   }
//   return console.log(result);
// }
// removeVowels("document"); // 'dcmnt'
// removeVowels("I like my boss"); // ' lk m bss'
// removeVowels("350 euro"); // '350 r'
// const text = "I like my boss";
// // пізніше в цю змінну ми запишемо новий рядок із потрібними символами
// let result = "";

// for (let i = 0; i < text.length; i++) {
//   if (
//     text[i] === "e" ||
//     text[i] === "o" ||
//     text[i] === "a" ||
//     text[i] === "u" ||
//     text[i] === "y" ||
//     text[i] === "i"
//   ) {
//     result = result + "";
//   } else {
//     result = result + text[i];
//   }
// }

// console.log(result); // 'My---name--is---Misha'

// У цьому завданні створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.

// Рядок words містить одне або декілька слів, розділених одним пробілом.

// Наприклад:

// function makeAbbr(words) {
//   // write code here
//   let result = words.slice(0, 1);
//   for (let i = 0; i < words.length; i++) {

//   }
//   // }
//   return console.log(result);
// }

// // 'NASA'
// makeAbbr("national aeronautics space administration");

// // 'CPU'
// makeAbbr("central processing unit");

// // 'SMILES'
// makeAbbr("simplified molecular input line entry specification");

// let words = "arab caram maram param";

// let result = words.slice(0, 1);
// let newCh = "";
// let result1 = "";
// for (let i = 0; i < words.length; i++) {
//   result += words.slice(words.indexOf(" ") + 1, words.indexOf(" ") + 2);
// }

// console.log(result);

// треба перебирати масив як минулого разу і в елементах після пробілів ставити в верхній регістр і шукати потім тільки ці елементи і виводити

// const text = "national aeronautics space administration";
// let result = text[0];

// for (let i = 0; i < text.length; i++) {
//   if (text[i] === " ") {
//     result += text[i + 1];
//   }
// }
// for (let i = 0; i < text.length; i++) {
//   if (
//     text[i] === "e" ||
//     text[i] === "o" ||
//     text[i] === "a" ||
//     text[i] === "u" ||
//     text[i] === "y" ||
//     text[i] === "i"
//   ) {
//     result = result + "";
//   } else {
//     result = result + text[i];
//   }
// }

// console.log(result); // 'My---name--is---Misha'

// console.log(result);

// function decryptMessage(message) {
//   // write code here
//   let ch = "";
//   for (let i = message.length - 1; i >= 0; i--) {
//     ch += message[i];
//   }
//   return ch;
// }

// // 'We like drinking beer!!!'
// decryptMessage("!!!reeb gniknird ekil eW");
// decryptMessage("abc"); // cba

// // 'A coronavirus pandemic will be in 2020'
// decryptMessage("0202 ni eb lliw cimednap surivanoroc A");

// У цьому завданні ти навчишся «перевертати» рядок та прибирати зайві символи.

// Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false — якщо ні.

// Перевертень — це слово або речення, яке читається однаково в обох напрямках (зліва направо й навпаки), при цьому ігноруючи регістр, пробіли та розділові знаки.

// function isWerewolf(target) {
//   // write code here
//   let normal = "";
//   let reserved = "";
//   for (let i = target.length - 1; i >= 0; i--) {
//     if (target[i].toLowerCase() !== target[i].toUpperCase()) {
//       reserved += target[i].toLowerCase();
//     }
//   }
//   for (let i = 0; i < target.length; i++) {
//     if (target[i].toLowerCase() !== target[i].toUpperCase()) {
//       normal += target[i].toLowerCase();
//     }
//   }

//   return console.log(
//     `${
//       reserved === normal
//     }, reserved = ${reserved} target = ${target} normal = ${normal}`
//   );
// }

// isWerewolf("rotator"); // === true; // rotator --> rotator
// isWerewolf("home"); // === false;  home --> emoh
// isWerewolf("Racecar"); // === true; // регістр ігнорується
// isWerewolf("eva, can i see bees in a cave"); // === true; // пробіли і розділові знаки ігноруються

// let a = "asdasdasd,asdasd sdaaAd , ads";
// let result = "";
// for (let item of a) {
//   if (item.toLowerCase() !== item.toUpperCase()) {
//     result += item.toLowerCase();
//   }
// }
// console.log(result);

// А тепер ти знайдеш відсоток входження символу в рядок.

// Ми вдосконалили нашу програму для збору статистики з вебінарів Міші. Тепер вона надсилає дані на сервер у вигляді рядка 111001010111011, де 1 — це студент, який зрозумів тему, а 0 — відповідно, ні.

// Але було б корисно зрозуміти, скільки відсотків студентів засвоїли матеріал, тобто наскільки вебінар був ефективним.

// Для цього створи функцію getSuccessRate, яка приймає рядок statistic і повертає відсоток студентів, які зрозуміли матеріал, округлюючи до найближчого цілого (використай метод Math.round).

// Зверни увагу: якщо вхідний рядок порожній — поверни 0.

// function getSuccessRate(statistic) {
//   // write code here
//   let count = 0;
//   let result = 0;
//   for (const item of statistic) {
//     if (item == 1) {
//       count++;
//     }
//   }
//   if (statistic.length) {
//     result = (100 / statistic.length) * count;
//   }
//   return console.log(Math.round(result));
// }

// getSuccessRate("11100"); // 60
// getSuccessRate("1100"); // 50
// getSuccessRate("000000"); // 0
// getSuccessRate("11111"); // 100
// getSuccessRate(""); // 0

// // let a = "11100";

// // console.log(100 / 5);

// const numbers = [];

// for (let i = 3; i <= 7; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// function createArray(N) {
//   // write code here
//   const arr = [];
//   for (let i = 0; i < N; i++) {
//     if (N > 0) {
//       arr.push(i + 1);
//     }
//   }
//   return console.log(arr);
// }

// createArray(1); // [1]
// createArray(3); // [1, 2, 3]
// createArray(0); // []

// function makeStickers(detailsCount, robotPart) {
//   // write code here
//   let result = [];
//   for (let i = 0; i < detailsCount; i++) {
//     result.push(`${robotPart} detail #${i + 1}`);
//   }
//   console.log(result);
// }

// makeStickers(3, "Body"); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
// makeStickers(4, "Head"); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// makeStickers(0, "Foot"); // []
// А тепер навчимо наших роботів сортувати коробки на складі. Кожна коробка має свій унікальний номер, а роботи вчаться сортувати в порядку зростання.

// Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки що доведеться перевіряти, чи правильно робот відсортував коробки.

// Для цього напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа розташовані в порядку зростання, або false — якщо ні.

// Зверни увагу: числа в масиві можуть повторюватися.

// Наприклад:
// function isSorted(boxNumbers) {
//   // write code here
//   let theLeastNumber = boxNumbers[0];
//   const arr = [];
//   for (let i = 0; i < boxNumbers.length; i++) {
//     if (theLeastNumber <= boxNumbers[i]) {
//       theLeastNumber = boxNumbers[i];
//       arr.push(boxNumbers[i]);
//     }
//   }
//   return console.log(boxNumbers.length === arr.length);
// }

// isSorted([1, 2, 3, 4, 5]); // true
// isSorted([0, 1, 1, 1, 2]); // true
// isSorted([1, 2, 11]); // true
// isSorted([5]); // true
// isSorted([]); // true
// isSorted([0, 3, 1, 2, 2, 2]); // false
// isSorted([1, 11, 2]); // false

// 'forward' означає y + 1 (крок уперед);
// 'back' означає y - 1 (крок назад);
// 'right' означає x + 1 (крок праворуч);
// 'left' означає x - 1 (крок ліворуч).

// function getLocation(coordinates, commands) {
//   // write code here
//   const result = coordinates.slice();
//   for (const command of commands) {
//     if (command === "forward") {
//       result[1] += 1;
//     }
//     if (command === "back") {
//       result[1] -= 1;
//     }
//     if (command === "right") {
//       result[0] += 1;
//     }
//     if (command === "left") {
//       result[0] -= 1;
//     }
//   }
//   console.log(result);
// }

// getLocation([0, 0], ["forward", "right"]); // [1, 1]
// getLocation([2, 3], ["back", "back", "back", "right"]); // [3, 0]
// getLocation([0, 5], ["back", "back", "back", "right", "left", "forward"]); // [0, 3]

// startProduction = 200, numberOfMonths = 3 та percent = 50:

// план на перший місяць — 200 + 50% = 300 роботів;
// на другий місяць це вже 300 + 50% = 450 роботів;
// і нарешті на третій місяць це 450 + 50% = 675 роботів.
// В результаті маємо отримати масив [300, 450, 675].

// function getPlan(startProduction, numberOfMonths, percent) {
//   // write code here
//   let result = [];
//   let num = startProduction;
//   for (let i = 0; i < numberOfMonths; i++) {
//     num += (num / 100) * percent;
//     num = Math.floor(num);
//     result.push(num);
//   }
//   return result;
// }

// getPlan(10, 4, 30); // [13, 16, 20, 26]
// getPlan(1000, 6, 20); // [1200, 1440, 1728, 2073, 2487, 2984]

// function getSpeedStatistic(testResults) {
//   // write code here

//   let theLeastNumber = testResults[0];
//   let theLargestNumber = testResults[0];
//   let average = 0;
//   let totalResult = [];
//   for (let i = 0; i < testResults.length; i++) {
//     if (testResults[i] < theLeastNumber) {
//       theLeastNumber = testResults[i];
//     }
//     if (testResults[i] > theLargestNumber) {
//       theLargestNumber = testResults[i];
//     }
//     if (testResults.length > 0) {
//       average += testResults[i];
//     }
//   }
//   totalResult.push(theLeastNumber);
//   totalResult.push(theLargestNumber);
//   totalResult.push(Math.floor(average / testResults.length));
//   if (testResults.length === 0) {
//     totalResult = [0, 0, 0];
//   }
//   return console.log(totalResult);
// }

// getSpeedStatistic([]); // [0, 0, 0]
// getSpeedStatistic([10]); // [10, 10, 10]
// getSpeedStatistic([8, 9, 3, 12]); // [3, 12, 8]
// getSpeedStatistic([10, 10, 11, 9, 12, 8]); // [8, 12, 10]

// function compareRobots(firstRobotResults, secondRobotResults) {
//   // write code here
//   let firstRobotCount = 0;
//   let secondRobotCount = 0;
//   for (const n of firstRobotResults) {
//     firstRobotCount += n;
//   }
//   for (const n of secondRobotResults) {
//     secondRobotCount += n;
//   }
//   if (firstRobotCount > secondRobotCount) {
//     return 'First robot for sale!'
//   } else if (firstRobotCount < secondRobotCount) {
//     return 'Second robot for sale!'
//   } else {
//     return 'Both robots for sale!'
//   }
// }

// compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); // 'First robot for sale!' (29 > 23)
// compareRobots([9, 7, 9], [1, 3, 4, 5, 12]); // 'Both robots for sale!' (25 = 25)
// compareRobots([1, 3, 4], [1, 1, 4, 5]); // 'Second robot for sale!' (8 < 11)

// function checkNumber(number) {
//   // write code here
//   const arr = [];
//   if (number > 0) {
//     arr.push(true);
//   } else {
//     arr.push(false);
//   }
//   if (number % 2 === 0) {
//     arr.push(true);
//   } else {
//     arr.push(false);
//   }
//   if (number % 10 === 0) {
//     arr.push(true);
//   } else {
//     arr.push(false);
//   }
//   return console.log(arr);
// }

// checkNumber(3); // [true, false, false]
// checkNumber(10); // [true, true, true]
// checkNumber(0); // [false, true, true]
// checkNumber(-1); // [false, false, false]

// function getArraysSum(arr1, arr2) {
//   // write code here
//   const arr = [...arr1, ...arr2];
//   let result = 0;
//   for (const n of arr) {
//     result += n;
//   }
//   console.log(result);
// }

// getArraysSum([1, 2], [3, 4]); // 10 (1 + 2 + 3 + 4)
// getArraysSum([1, 2, 3, 4], [5, 6, 7, 8]); // 36
// getArraysSum([], []); // 0
// getArraysSum([-1, -2, -3], [-4, -5, -6]);
// getArraysSum([-7, 64, -89, -63, 5], [9, 39, 5, 32, -11]);

// function combineArrays(first, second) {
//   // write code here
//   const result = [];
//   for (let i = 0; i < first.length; i++) {
//     result.push(first[i] + second[i]);
//   }
//   console.log(result);
// }

// combineArrays([1, 2, 5], [3, 6, 1]); // [4, 8, 6]
// combineArrays([1], [6]); // [7]
// combineArrays([], []); // []

// Створи порожній масив результатів.
// Створи рядок для «розрізання» з вхідного рядка та додай _, якщо потрібно.
// Зроби перебір рядка із кроком циклу 2.
// На кожній ітерації додавай рядок із поточним та наступним символами до масиву результатів.

// function splitString(str) {
//   // write code here
//   const result = [];
//   let secondStr = "";
//   if (str.length % 2 === 1) {
//     str += "_";
//   }
//   for (let i = 0; i < str.length; i++) {
//     secondStr += str[i];
//   }
//   for (let i = 0; i < secondStr.length; i += 2) {
//     result.push(secondStr[i] + secondStr[i + 1]);
//   }
//   return console.log(result);
// }

// splitString("123456"); // ['12', '34', '56']
// splitString("ab cd ef"); // ['ab', ' c', 'd ', 'ef']
// splitString("abc"); // ['ab', 'c_']
// splitString(" "); // [' _']
// splitString(""); // []

// Напиши функцію scrollingText, яка:

// приймає рядок word;
// послідовно переставляє всі символи в рядку з нульового індексу на останній;
// повертає масив з отриманими комбінаціями рядка у верхньому регістрі.
// Наприклад, для слова 'robot':

// перший крок: беремо першу літеру (r) слова 'robot' і переставляємо її в кінець слова — 'obotr';
// другий крок: беремо першу літеру (о) слова 'obotr' і переставляємо її в кінець – 'botro' і так далі.

// Зроби перебір рядка word.
// На кожній ітерації додавай до масиву з результатами рядок, який містить:
// усі символи від поточного індексу до кінця рядка;
// усі символи від початку рядка до поточного індексу (не включно);
// Щоб отримати підрядок, використай метод slice.
// function scrollingText(word) {
//   // write code here
//   let result = [];
//   for (let i = 0; i > word.length; i++) {
//     result.push(word.slice(1, 2) + word[0]);
//   }
//   return console.log(result);
// }

// let a = "ROBOT";
// let str = "";
// let result = ["ROBOT"];
// for (let i = 0; i < a.length - 1; i++) {
//   // str = ;
//   result.push(a.slice(1) + a[0]);
//   a = a.slice(1) + a[0];
// }
// console.log(result);

// console.log(a.slice(1));
// [
//   "ROBOT", // спочатку вхідне слово
//   "OBOTR", // потім із переставленим порядком символів
//   "BOTRO",
//   "OTROB",
//   "TROBO",
// ];

// function isSpecialNumber(n) {
//   // write code here
//   const str = String(n);
//   const arr = str.split("");
//   let result = "";
//   for (const num of arr) {
//     if (num <= 5) {
//       result = "Special!!";
//     } else {
//       result = "NOT!!";
//       break;
//     }
//   }
//   console.log(result);
// }

// isSpecialNumber(2); // 'Special!!'
// // 2 — знаходиться в інтервалі від 0 до 5

// isSpecialNumber(9); // 'NOT!!'
// // 9 > 5

// isSpecialNumber(23); // 'Special!!'
// // всі цифри числа 23 знаходяться в інтервалі від 0 до 5

// isSpecialNumber(38); // 'NOT!!'
// // 8 > 5
// isSpecialNumber(2783); // 'NOT!!'

// function isTidy(number) {
//   // write code here
//   const arr = String(number).split("");
//   let theLargestNumber = arr[0];
//   let result;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= theLargestNumber) {
//       theLargestNumber = arr[i];
//       result = true;
//     } else {
//       result = false;
//       break;
//     }
//   }
//   return console.log(result);
// }
// isTidy(12345673); // false

// isTidy(12); // true
// // цифри розташовані за зростанням

// isTidy(32); // false
// // цифри розташовані за спаданням

// isTidy(1024); // false
// // 1 > 0

// isTidy(3445); // true
// // однакові цифри можуть бути поруч

// isTidy(13579); // true
// // цифри розташовані за зростанням

// function isJumping(number) {
//   // write code here
//   const arr = String(number).split("");
//   let result = "";
//   let num = arr[0];
//   if (arr.length === 1) {
//     result = "JUMPING";
//   }
//   for (let i = 1; i < arr.length; i++) {
//     // if (arr.length === 1) {
//     //   result = "JUMPING";
//     //   break;
//     // }
//     if (num - arr[i] === 1 || arr[i] - num === 1) {
//       result = "JUMPING";
//       num = arr[i];
//     } else {
//       result = "NOT JUMPING";
//       break;
//     }
//   }
//   return console.log(result);
// }

// // число з однієї цифри
// isJumping(9); // 'JUMPING'

// // 7 і 9 відрізняються на 2, а не на 1
// isJumping(79); // 'NOT JUMPING'

// // різниця між однаковими цифрами дорівнює 0
// isJumping(7889); // 'NOT JUMPING'

// // усі сусідні цифри відрізняються на 1
// isJumping(23454); // 'JUMPING'
