const { on } = require('events');
const fs = require('fs');



fs.writeFileSync('myFile.txt', "Hello Johfa")
// it will replace
fs.writeFileSync('myFile.txt', "Hello Johfa my kiliza")
// it will append the text
fs.appendFileSync('myFile.txt', ' Moyna pakhita');


const readDate = fs.readFileSync('myFile.txt');

// Will return a buffer 
console.log(readDate);




// Here Sync means syncronous 


fs.readFile('myFile.txt', (err, data)=>{
    console.log(data.toString());
});
// if hello is print first that means our this fill will be executed
console.log("Hello");





