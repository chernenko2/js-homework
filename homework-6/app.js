// Перше завдання

// Зробив два методи - decrement та increment які відповідно сортують по віку об'єкти в масиві по властивості age яка знаходиться в об'єктах

// Друге завдання - додав методи average (рахує середній вік всіх людей по властивості age) та метод age (який знаходить і виводить об'єкт з найбільшим віком)

function Human(arr) {
  this.arr = arr;
}

Human.prototype.age = function () {
  let lessNumber = this.arr[0].age;
  let index;
  for (let i = 0; i < this.arr.length; i++) {
    if (lessNumber < this.arr[i].age) {
      lessNumber = this.arr[i].age;
      index = this.arr[i];
    } else {
      index = this.arr[0];
    }
  }
  //   console.log(index);
  return index;
};

Human.prototype.average = function () {
  let result = 0;
  for (let i = 0; i < this.arr.length; i++) {
    result += this.arr[i].age;
  }
  return result / this.arr.length;
};

Human.prototype.increment = function () {
  this.arr.sort(function (a, b) {
    return a.age - b.age;
  });
};

const test = new Human([
  {
    name: "Oleh",
    age: 25,
  },
  {
    name: "Alina",
    age: 23,
  },
  {
    name: "Andrew",
    age: 22,
  },
  {
    name: "John",
    age: 28,
  },
  {
    name: "Donatello",
    age: 21,
  },
]);

console.log(test.age());
console.log(test.average());

Human.prototype.decrement = function () {
  this.arr.sort(function (a, b) {
    return b.age - a.age;
  });
};

test.increment();
console.log(test);

const secondTest = new Human([
  {
    name: "Bimbo",
    age: 33,
  },
  {
    name: "Arnold",
    age: 44,
  },
  {
    name: "Oleksandr",
    age: 15,
  },
  {
    name: "Johnatan",
    age: 47,
  },
  {
    name: "Dinatello",
    age: 91,
  },
]);

secondTest.decrement();
console.log(secondTest);

console.log(secondTest.average());
console.log(secondTest.age());
