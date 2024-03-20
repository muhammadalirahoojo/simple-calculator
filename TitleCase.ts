import chalk from "chalk";

let sentence:string="i am learning typescript for the very first time";

// uppercase
let upperCase:string=sentence.toUpperCase();
console.log(chalk.green.bold(upperCase));

// lowercase
let lowerCase:string=sentence.toLowerCase();
console.log(chalk.bgCyan.red.bold(lowerCase));

// TitleCase
// step1 split string into array
let words:string[]=sentence.split(" ");

// step 2 declare and initliaze variable with empty inverted commos ""
let titleCase:string="";

// step 3
for (let index = 0; index < words.length; index++) {
    titleCase += words[index].charAt(0).toUpperCase()+words[index].slice(1).toLowerCase()+" ";
    
}
console.log(chalk.blue.italic(titleCase));

//split method
let sentence1:string="this is split example";
let splitString:string[]=sentence1.split(" ");
console.log(splitString);

//slice method
const str:string="Hello, TypeScript World!";
const slicedString:string=str.slice(0,6)
console.log(slicedString)

// charAt method
const pName:string="Muhammad Ali"
const pickChar:string=pName.charAt(0);
console.log(pickChar);


