/* GLOBALS - NO WINDOW */

// __dirname - path to file directory
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current modules(file)
// process - info about env where the program is being executed

/* MODULES */

/* paused at  41.21*/

//CommonJS every file is module (By default)
//modules - encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

/* sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data); */
