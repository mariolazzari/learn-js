// string
let string = "";
// padStart: str.padStart(targetLength [, padString])
console.log(string.padStart(10, "Hi"));
// more than string size
console.log(string.padStart(10, "Javascript Mastery"));
// pad end
string = "12345";
console.log(string.padStart(10, "."));
console.log(string.padEnd(10, "."));

const id1 = 12;
const id2 = 123;
console.log("id1:", id1.toString().padStart(10, "0"));
console.log("id2:", id2.toString().padStart(10, "0"));

// Object values
const obj = {
  name: "Mario",
  age: 45,
  hobbies: ["Sport", "Music"],
};
const vals = Object.values(obj);
console.log("Obj vals:", vals);

// Object entries
const entries = Object.entries(obj);
console.log("Obj entries:", entries);

// Exponentiation
let exp = Math.pow(2, 3);
console.log("2^3 =", exp);
exp = 2 ** 3;
console.log("2^3 =", exp);

// Trailing commas
const obj2 = {
  first: 1,
  second: 2,
  third: 3, // extra comma, no error
};
// empty item
let arr = [1, 2, , 3];
console.log("array with 1 empty item:", arr);
arr = [1, 2, , , , , 3];
console.log("array with 4 empty item:", arr);
