const oneDay = 24 * 60 * 60 * 1000; 
const firstDate = new Date(2019, 7, 6);
const secondDate = new Date(2022, 9, 7);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
console.log(diffDays)