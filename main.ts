#!  /usr/bin/env node 
import inquirer from "inquirer"

let quiz:{
    question01:string;
    question02:string;
    question03:string;
    question04:string;
    question05:string;

}=await inquirer.prompt([
    {
   name:"question01",
   type:"list",
   message:"Q1.What is the varible in programming? ",
   choices:["store data","store only array ","store undefined values","store error values"]
    },
    {
        name:"question02",
        type:"list",
        message:"Q.2 which one is assignemnt operator?",
        choices:["=","-","//","&&"]
    },
    {
        name:"question03",
        type:"list",
        message:"Q.3 What command compiles Typescript files in project",
        choices:["tsc","compile","tsc init","npm init"]
    },
    {
        name:"question04",
        type:"list",
        message:"Q.4 What is the file extension for typescrit files",
        choices:[".js",".ts",".html",".css"]

    },
    {
        name:"question05",
        type:"list",
        message:"Q.5 how install tsconfiguration file for typescrit files",
        choices:["tsc --init","tsc main.ts","tsc main.js","npm init"]
    }
]);
let score:number= 0;

switch(quiz.question01){
    case"store data":
    console.log("Q.1 is correct")
    ++score;
    break;
    default:
        console.log("Q.1 is incorrect")
}

switch(quiz.question02){
    case"=":
    console.log("Q.2 is correct")
    ++score;
    break;
    default:
        console.log("Q.2 is incorrect")
}

switch(quiz.question03){
    case"tsc":
    console.log("Q.3 is correct")
    ++score;
    break;
    default:
        console.log("Q.3 is incorrect")
}

switch(quiz.question04){
    case".ts":
    console.log("Q.4 is correct")
    ++score;
    break;
    default:
        console.log("Q.4 is incorrect")
}

switch(quiz.question05){
    case"tsc --init":
    console.log("Q.5 is correct")
    ++score;
    break;
    default:
        console.log("Q.5 is incorrect")
}
console.log(`Score: ${score }`)