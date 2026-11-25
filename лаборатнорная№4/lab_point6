'use strict';

const max = (matrix) => {
  let res = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (res < cell) res = cell;
    }
  }
  return res;
};

module.exports = { max };