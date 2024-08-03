const { readFile, writeFile } = require("fs");

console.log("Starting");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `here is the result :   ${first}, ${second}`,
  { flag: "a" }
);
console.log("Finished");
console.log("Starting the next one");
