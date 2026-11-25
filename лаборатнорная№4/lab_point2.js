'use strict';

const sum = (...args) => {
  let acc = 0;
  for (const item of args) {
    acc += item;
  }
  return acc;
};

module.exports = { sum };