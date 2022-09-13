const data1 = [
  { id: 1, name: "Rayhan", age: 27, mobile: 1223123 },
  { id: 2, name: "Sajib", age: 21, mobile: 2342343 },
  { id: 3, name: "Fahim", age: 21, mobile: 909097 },
  { id: 4, name: "Kamrul", age: 15, mobile: 21652123 },
];
const data2 = [
  { id: 1, birthdate: "11-04-1999", email: "xtz@gmail.com" },
  { id: 2, birthdate: "11-05-1989", email: "fsz@gmail.com" },
  { id: 4, birthdate: "14-04-1997", email: "z1@gmail.com" },
  { id: 3, birthdate: "11-04-2001", email: "f2z@gmail.com" },
  { id: 5, birthdate: "04-04-1999", email: "vsz@gmail.com" },
];


const result = data1.map((t1) => ({
  ...t1,
  ...data2.find((t2) => t2.id === t1.id) ,
}));

const result2 = data2.map((t1) => ({
    ...t1,
    ...result.find((t2) => t2.id === t1.id) ,
  }));



console.log(result2);

/*

const combinedArray = [...data1, ...data2];
let result1 = {};
 combinedArray.forEach((t1) => {
    result1[t1.id + ""] = {...(result1[t1.id] || {}), ...t1}
 })

 */