'use strict';

const seq = (...args) => {
  if (typeof args[0] === 'number') return args[0];
  return (...next) => {
    if (typeof next[0] === 'number') {
      return args.reduceRight((acc, fn) => fn(acc), next[0]);
    }
    return seq(...args, ...next);
  };
};

module.exports = { seq };