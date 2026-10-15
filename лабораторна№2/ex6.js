'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const avg = average(square(i), cube(i));
    result.push(avg);
  }
  return result;
};

console.log('6-calculate:', calculate());

module.exports = { square, cube, average, calculate };