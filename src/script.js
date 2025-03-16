const outputDisplay = document.querySelector('#currentDisplay');
const allClear = document.querySelector('#allClear');
const clear = document.querySelector('#clear');

allClear.addEventListener('click', () => AllClear);
clear.addEventListener('click', () => Clear);

function AllClear() {
    console.log("Hello");
}

function Clear() {

}

// Main functions for basic math
function add(x, y) {
    return x + y;    
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// function operate(operator, x, y) {
//     x = Number(x)
//     y = Number(y)

//     switch (operator) {
//         case '+':
//             return add(x, y)
//         case '−':
//             return substract(x, y)
//         case '×':
//             return multiply(x, y)
//         case '÷':
//             if (b === 0) return null
//                 else return divide(a, b)
//         default:
//             return null
// }
