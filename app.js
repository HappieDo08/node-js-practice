// esm

import { Command } from "commander";

const program = new Command(); 

program
.option("-s, --show", "Display your Information")
.option("-n, --name <name>", "Your Name")
.option("-g, --gender <gender>", "Your Gender");


// program.parse(process.argv);
program.parse();

const options = program.opts();


const user = {
    name: options.name || "Unknown",
    gender: options.gender || "Unknown",
};

const displayUser = () => {
    console.log("User Information");
    console.log(`Name: ${user.name}`);
    console.log(`Gender: ${user.gender}`);
};

if (options.show) {
    displayUser();
} 
else {
    console.warn("\x1b[31m Unknown action type!");
}