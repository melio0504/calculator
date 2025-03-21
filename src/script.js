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

let isResultDisplayed = false;

function handleInput(value) {
    if (!isNaN(value) || value === '.') {
        if (isResultDisplayed) { 
            firstNum = ''; 
            isResultDisplayed = false; 
        }

        if (value === '.') {
            if (operator) {
                if (secondNum.includes('.')) return;
            } else {
                if (firstNum.includes('.')) return;
            }
        }

        if (operator) {
            secondNum += value;
            outputDisplay = secondNum;
        } else {
            firstNum += value;
            outputDisplay = firstNum;
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (firstNum && secondNum) {
            firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum)).toString();
            secondNum = '';
        }
        operator = value;
        outputDisplay = firstNum;
        isResultDisplayed = false;
    } else if (value === '=' && firstNum && secondNum) {
        firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum)).toString();
        operator = '';
        secondNum = '';
        outputDisplay = firstNum;
        isResultDisplayed = true;
    } 
    
    else if (value === 'AC') {
        firstNum = '';
        secondNum = '';
        operator = '';
        outputDisplay = '0';
        isResultDisplayed = false;
    } 
    
    else if (value === 'C') {
        if (secondNum) {
            secondNum = secondNum.slice(0, -1);
            outputDisplay = secondNum || '0';
        } else if (operator) {
            operator = '';
        } else if (firstNum) {
            firstNum = firstNum.slice(0, -1);
            outputDisplay = firstNum || '0';
        }
    }

    updateDisplay();
}

function updateDisplay() {
    display.textContent = outputDisplay;
    display.scrollRight = 0;
}
