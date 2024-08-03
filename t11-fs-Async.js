const { readFile, writeFile } = require("fs");
console.log("Starting");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    //   console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${result}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this.");
      }
    );
  });
});

console.log("Starting the next one");
