'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Yaroslav Zhorniak', phone: '+380506442647' },
];

const findPhoneByName = (name) => {
  for (let i = 0; i < phonebook.length; i++) {
    const record = phonebook[i];
    if (record.name === name) {
      return record.phone;
    }
  }
};

console.log('9-array (Marcus Aurelius):', findPhoneByName('Marcus Aurelius'));
console.log('9-array (Yaroslav Zhorniak):', findPhoneByName('Yaroslav Zhorniak'));

module.exports = { phonebook, findPhoneByName };