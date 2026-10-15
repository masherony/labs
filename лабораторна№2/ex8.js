'use strict';

const createUser = (name, city) => ({ name, city });

console.log('8-create:', createUser('Marcus Aurelius', 'Roma'));

module.exports = { createUser };