function add (a,b) {
    return a + b;
}

function multiple(a,b) {
    return a * b;
}

function mul(a,b) {
    if (b==0){

        console.error("Деление на ноль нас не устраивает")
    }
    else return a / b;
}

function minus(a,b) {
    return a - b;
}

function calculate(a,b,callbackfunction) {
     return callbackfunction(a,b);
    
}

const num1 = +prompt("Введите 1 е число");
const num2 = +prompt("Введите 2 е число");
const operation = prompt("Выберете действие");


switch(operation){
    case "+" : document.write(calculate(num1, num2, add));
    break;
    case "-" : document.write(calculate(num1, num2, minus));
    break;
    case "*" : document.write(calculate(num1, num2, multiple));
    break;
    case "/" : document.write(calculate(num1, num2, mul));
    break;
    default: alert("Потрачено");
}




