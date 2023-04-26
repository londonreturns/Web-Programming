// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";


// prompt
rl.question("what is your marks\n", function (string) {
    userInput = string;
  
    if (userInput > 80){
        console.log("distinction");
    }else if (userInput > 70){
        console.log("first");
    }else if (userInput > 60){
        console.log("second")
    }else if (userInput > 50){
        console.log("third")
    }else{
        console.log("fail");
    }
  
    // close input stream
    rl.close();
  });