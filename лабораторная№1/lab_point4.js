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
  null,
  undefined,
  { name: 'KPI' },
];


const counts = {};


for (const item of array) {
  const type = typeof item;


  if (counts[type] === undefined) {
    counts[type] = 1; 
  } else {
    counts[type] = counts[type] + 1; 
  }
}


console.log(counts);