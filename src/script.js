function add(num1, num2) {
    return roundingNumber(num1 + num2);
}

function subtract(num1, num2) {
    return roundingNumber(num1 - num2);
}

function multiply(num1, num2) {
    return roundingNumber(num1 * num2);
}

function divide(num1, num2) {
    return num2 === 0 ? 'Error' : roundingNumber(num1 / num2);
}

function operate(operator, num1, num2) {
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };
    return operations[operator] ? operations[operator](num1, num2) : 'Error';
}

// To round a number after operation
function roundingNumber(num) {
    return Number.isInteger(num) ? num : parseFloat(num.toFixed(6));
}

let firstNum = '';
let secondNum = '';
let operator = '';
let outputDisplay = '0';

const display = document.querySelector('#currentDisplay');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => handleInput(button.value));
});
