const array = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  42,
  'kpi',
  true,
  0,
  'javascript',
  false,
  100,
];


const counts = {
  number: 0,
  string: 0,
  boolean: 0,
};


for (const item of array) {
  
  const type = typeof item;

  
  if (type in counts) {
    counts[type] = counts[type] + 1; 
  }
}


console.log(counts);