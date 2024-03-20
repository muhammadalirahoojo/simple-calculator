//number string boolean any
import chalk from "chalk";
let name = "Muhammad Ali";
console.log("Hell, This is me Muhammad Ali");
let age = 30;
console.log("I am ", age, "years old");
let isStudent = false;
console.log("Is-Student", isStudent);
let favourableValue;
favourableValue = "I am a very lucky";
console.log(favourableValue);
favourableValue = 15;
console.log(chalk.italic.red.bold("And My Lucky Number is:", favourableValue));
//undefined
let a = undefined;
let b; // beacuse we don,t know the actual datatype;
b = 10;
b = "ten";
let key1 = Symbol("key1");
let key2 = Symbol("key2"); // return false beacuse key name can not be same
console.log(key1 === key2);
let myname = null;
console.log(myname);
