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
const wallet = {
  name: "Oleh Chernenko",
  bitcoin: {
    name: "Bitcoin",
    logo: '<img src="./img/Bitcoin.png" alt="bitcoin">',
    amount: 5,
    rate: 705000.37,
  },
  ethereum: {
    name: "Ethereum",
    logo: '<img src="./img/Ethereum.png" alt="Ethereum">',
    amount: 4,
    rate: 47367.65,
  },
  stellar: {
    name: "Stellar",
    logo: '<img src="./img/Stellar.png" alt="Stellar">',
    amount: "100",
    rate: 4.18,
  },
  show(nameOfCrypto) {
    for (item in wallet) {
      if (item == nameOfCrypto) {
        const owner = document.getElementById("owner");
        const crypto = document.getElementById("typeOfCrypto");
        const logo = document.getElementById("logo");
        const amountOfCrypto = document.getElementById("amount");
        const total = document.getElementById("result");
        owner.innerHTML = `Доброго дня ${this.name}!`;
        crypto.innerHTML = `Назва криптовалюти: ${this[item].name} `;
        logo.innerHTML = this[item].logo;
        amountOfCrypto.innerHTML = `На вашому гаманці: ${this[item].amount} ${this[item].name}`;
        total.innerHTML = `Якщо сьогодні продасте всю крипту, у вас буде: ${
          this[item].amount * this[item].rate
        } гривень`;
      }
    }

    // console.log(`Доброго дня ${this.name}! На вашому рахунку ${nameOfCrypto}`);
  },
};
// console.log(owner);
wallet.show("bitcoin");
wallet.show("stellar");
wallet.show("ethereum");

function generateRandomColor() {
  //RGB
  // FF0000
  // 00FF00
  // 0000FF
  const hexCodes = "0123456789ABCDEFG";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

let columns = document.getElementsByClassName("col");
for (let i = 0; i < columns.length; i++) {
  columns[i].style.background = generateRandomColor();
}
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

let arr = [5, 10, 15, 20, 25, 30, 35, 40];

console.log(arr.indexOf(33));
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
