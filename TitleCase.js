import chalk from "chalk";
let sentence = "i am learning typescript for the very first time";
// uppercase
let upperCase = sentence.toUpperCase();
console.log(chalk.green.bold(upperCase));
// lowercase
let lowerCase = sentence.toLowerCase();
console.log(chalk.bgCyan.red.bold(lowerCase));
// TitleCase
// step1 split string into array
let words = sentence.split(" ");
// step 2 declare and initliaze variable with empty inverted commos ""
let titleCase = "";
// step 3
for (let index = 0; index < words.length; index++) {
    titleCase += words[index].charAt(0).toUpperCase() + words[index].slice(1).toLowerCase() + " ";
}
console.log(chalk.blue.italic(titleCase));
//split method
let sentence1 = "this is split example";
let splitString = sentence1.split(" ");
console.log(splitString);
//slice method
const str = "Hello, TypeScript World!";
const slicedString = str.slice(0, 6);
console.log(slicedString);
// charAt method
const pName = "Muhammad Ali";
const pickChar = pName.charAt(0);
console.log(pickChar);
