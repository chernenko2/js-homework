// -------------------------------------------------------------------------------------
// function createNewUser(firstName, lastName, birthday) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = birthday;
// }

// const newUser = new createNewUser(
//   (firstName = prompt("Введіть ваше ім'я")),
//   (lastName = prompt("Введіть ваше прізвище")),
//   (birthday = prompt("dd.mm.yyyy"))
// );

// createNewUser.prototype.getLogin = function () {
//   console.log(`${(this.firstName.charAt(0) + this.lastName).toLowerCase()}`);
// };

// createNewUser.prototype.getAge = function () {
//   let now = new Date();
//   if (
//     now.getMonth() >
//     new Date(this.birthday.split(".").reverse().join(".")).getMonth()
//   ) {
//     console.log(
//       now.getFullYear() -
//         new Date(this.birthday.split(".").reverse().join(".")).getFullYear()
//     );
//   } else if (
//     now.getMonth() <
//     new Date(this.birthday.split(".").reverse().join(".")).getMonth()
//   ) {
//     console.log(
//       now.getFullYear() -
//         new Date(this.birthday.split(".").reverse().join(".")).getFullYear() -
//         1
//     );
//   } else "Помилка, можливо ви ввели дату народження в неправильному форматі";
// };

// createNewUser.prototype.getPassword = function () {
//   let password =
//     this.firstName.charAt(0).toUpperCase() +
//     this.lastName +
//     this.birthday.slice(-4);
//   console.log(password);
// };

// newUser.getLogin();
// newUser.getAge();
// newUser.getPassword();

// ---------------------------------------------------------------------
// function filterBy(arr, typeOfData) {
//   return console.log(arr.filter((e) => typeof e != typeOfData));
// }

// filterBy(
//   [1, 2, 3, 4, 5, "55", "66", null, undefined, true, false],
//   "undefined"
// );
