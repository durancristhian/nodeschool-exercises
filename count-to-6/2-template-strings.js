const name = process.argv[2];
const text = (
`Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`
);

console.log(text);
