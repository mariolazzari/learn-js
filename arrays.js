// array
const numbers = [1, 5, 3, 4, 2];

// forEach
numbers.forEach(num => console.log(num));

// includes
const num = 2;
console.log(`numbers includes ${num}: ${numbers.includes(num)}`);

// filter (create new array)
const filtered = numbers.filter(num => num < 3);
console.log(`numbers ${numbers} smaller then 3: ${filtered}`);

// map (create new array)
const incNumbers = numbers.map(num => num + 1);
console.log(`numbers ${numbers} incremented: ${incNumbers}`);

// reduce
const sum = numbers.reduce((acc, cur) => (acc += cur));
console.log(`Sum of ${numbers} = ${sum}.`);

// some
let test = numbers.some(num => num < 3);
console.log(`${numbers} includes some number < 3 = ${test}`);

// every
test = numbers.every(num => num < 3);
console.log(`${numbers} are all < 3 = ${test}`);

// sort mutes array
const comparator = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 9;
  }
};

const sorted = numbers.sort(comparator);
console.log("Sorted descending numbers:", sorted);

// reverse
const reverserd = numbers.reverse();
console.log("Reversed numbers:", reverserd);

// concat
const numbers2 = [6, 7, 8, 9, 10];
const concat = numbers.reverse().concat(numbers2);
console.log("Concatenated array:", concat);
