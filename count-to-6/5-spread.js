const numbers = process.argv.splice(2);
const result = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${result}`);
