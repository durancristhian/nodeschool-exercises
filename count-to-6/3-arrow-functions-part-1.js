const inputs = process.argv.slice(2);
const result = inputs
                .map(i => i[0])
                .reduce((a, i) => a + i, "");

console.log(`[${inputs}] becomes "${result}"`);
