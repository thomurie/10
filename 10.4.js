// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...nums) => nums.filter(num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((vals) => vals * 2),
];

/** remove a random element in the items array
and return a new array without that item. */
const randomIndex = (min = 0, max) => Math.random() * (max - min) + min;

const removeRandomFun = (items) => {
  const index = randomIndex(0, items.length - 1);
  delete items[index];
  return [...items];
};
/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */
const removeKey = (obj) => ({ [key]: undefined, ...obj });

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ [key]: val, ...obj });
