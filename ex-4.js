// Start coding here
let calculator = {};

calculator.add = (a, b) => a + b;
calculator.subtract = (a, b) => a - b;
calculator.multiply = (a, b) => a * b;
calculator.divide = (a, b) => a / b;
console.log(calculator);

const addResult = calculator.add(10, 20);
const divideResult = calculator.divide(3000, 10);
console.log(addResult, divideResult);
