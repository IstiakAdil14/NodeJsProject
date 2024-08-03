// CommonJS, every file is module (by default)
// modules - Encapsulated code (only share minimum)

const names = require("./t4-name");
const sayHi = require("./t5-utils");
const data = require("./t6-alternative-flavor");
require("./t7-mind-grenede");

sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
