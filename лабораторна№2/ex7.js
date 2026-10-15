'use strict';

const fn = () => {
  const objConst = { name: 'Marcus' };
  let objLet = { name: 'Aurelius' };

 
  objConst.name = 'Antoninus';
  objLet.name = 'Pius';

 
  objLet = { name: 'New' };

  console.log('7-objects objConst:', objConst);
  console.log('7-objects objLet:', objLet);
};

fn();

module.exports = { fn };