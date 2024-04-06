//const chalk = require("chalk");
const chalk = require('chalk');
const validator = require("validator");
console.log(chalk.blue.inverse(" Hello Rajesh"));
const res = validator.isEmail("rkumargutpa798@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
