'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

console.log('5-range-odd [15, 30]:', rangeOdd(15, 30));

module.exports = { rangeOdd };