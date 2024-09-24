// esm

import { Command } from "commander";

const program = new Command(); 

program
.option("-s, --show", "Display your Information")
.option("-n, --name <name>", "Your Name")
.option("-a, --age <age>", "Your Name")
.option("-g, --gender <gender>", "Your Gender")
.allowUnknownOption(true);


// program.parse(process.argv);
program.parse();

const options = program.opts();


const user = {
    name: options.name || "Unknown",
    age: options.age || "Unknown",
    gender: options.gender || "Unknown",
    
};

const displayUser = () => {
    console.log("User Information");
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Gender: ${user.gender}`);
};

if (options.show) {
    displayUser();
} 
else {
    console.warn("\x1b[31m Unknown action type!");
}