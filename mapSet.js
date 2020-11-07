const myArray = [1, 2, 3, 4, 5, 5, 1, 2];
const mySet = new Set(myArray);

// remove duplicates from array
console.log(myArray);
console.log(mySet);

// back to array
const uniques = [...mySet];
console.log("Unique values:", uniques);

// add value
mySet.add(6);
const person = { name: "Mario" };
mySet.add(person);
console.log("Add:", mySet);

// delete value
mySet.delete(6);
mySet.delete(person);
console.log("Delete:", mySet);

// clear all elements
mySet.clear();
console.log("Clear:", mySet);

// has
mySet.add(5);
console.log("My set has 5:", mySet.has(5));
console.log(`My set has ${person.name}:`, mySet.has(person));

// size property
console.log("My set size:", mySet.size);

// Map
let myMap = new Map([
  ["firstName", "Mario"],
  ["lastName", "Lazzari"],
]);
console.log("My map:", myMap);

const myObject = {};
const a = {};
const b = {};

myObject[a] = "a";
myObject[b] = "b";
console.log("Object:", myObject);

myMap = new Map([
  [a, "a"],
  [b, "b"],
]);
console.log("Map", myMap);

// set
myMap.set({}, "c");
myMap.set(1, "one");
console.log("Map", myMap);

// delete
myMap.delete(1);
console.log("Map delete 1:", myMap);

// clear
myMap.clear();
console.log("Clear:", myMap);

// has (search by key, NOT value)
myMap = new Map([
  [1, "one"],
  [2, "two"],
]);
console.log("Map has 1:", myMap.has(1));

// size
console.log("Map size:", myMap.size);
