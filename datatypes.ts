//number string boolean any

import chalk from "chalk";

let name:string="Muhammad Ali"
console.log("Hell, This is me Muhammad Ali");

let age:number=30;
console.log("I am ",age,"years old");

let isStudent:boolean=false;
console.log("Is-Student",isStudent);

let favourableValue:any;
favourableValue="I am a very lucky";
console.log(favourableValue);

favourableValue=15;
console.log(chalk.italic.red.bold("And My Lucky Number is:",favourableValue));

//undefined
let a:undefined=undefined;

let b:unknown; // beacuse we don,t know the actual datatype;
b=10;
b="ten"

let key1=Symbol("key1");
let key2=Symbol("key2")// return false beacuse key name can not be same
console.log(key1===key2)

let myname:null=null
console.log(myname);




