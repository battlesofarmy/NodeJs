// if we use utf-8 or chunk.toString(); , it will be return the original text


const fs = require('fs');

// const ourReadStream = fs.createReadStream(__dirname + '/bigData.txt','utf-8');
const ourReadStream = fs.createReadStream(__dirname + '/bigData.txt');

ourReadStream.on('data',(chunk)=>{
    // console.log(chunk.toString());
    console.log(chunk)
})


// console.log()
