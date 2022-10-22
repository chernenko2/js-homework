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
