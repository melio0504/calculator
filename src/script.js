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
    return roundingNumber(num1 / num2);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return divide(num1, num2);
            break;
    }
}

function roundingNumber(num) {
    const roundLength = 1000000;

    if (!Number.isInteger(num)) {
        return Math.round((num + Number.EPSILON) * roundLength) / roundLength;
    }

    return num;
}
