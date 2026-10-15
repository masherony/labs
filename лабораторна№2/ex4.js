'use strict';

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

console.log('4-range [15, 30]:', range(15, 30));

module.exports = { range };