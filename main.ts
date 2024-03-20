#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

const answer= await inquirer.prompt([

    {name:"firstNumber",type:"number",message:"Enter First Number"},
    {name:"secondNumber",type:"number",message:"Enter Second Number"},
    {
        message:"choose one of operator to perform calculation",
        name:"operator",
        type:"list",
        choices:["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION", "MODULE"]
    }
   

])

if(answer.operator==="ADDITION"){

    console.log (chalk.green.bold.italic((answer.firstNumber+answer.secondNumber)));
    
}
else if(answer.operator==="SUBTRACTION"){

    console.log (chalk.green.bold.italic((answer.firstNumber-answer.secondNumber)));
    
}
else if(answer.operator==="MULTIPLICATION"){

    console.log (chalk.green.bold.italic((answer.firstNumber*answer.secondNumber)));
    
}
else if(answer.operator==="DIVISION"){

    console.log (chalk.green.bold.italic((answer.firstNumber/answer.secondNumber)));
    
}

else if(answer.operator==="MODULE"){

    console.log (chalk.green.bold.italic((answer.firstNumber%answer.secondNumber)));
    
}

