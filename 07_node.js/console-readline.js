//const readline = require('readline');
import readline from 'node:readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What do you think for node.js?", answer => {
    console.log("Thank you for your feedback: ", answer);
    rl.close();
})
