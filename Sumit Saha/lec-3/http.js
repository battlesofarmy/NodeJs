const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("HI");
    res.write("Hello World");
    res.end();
})


server.listen(3000,()=>{
    console.log("Lesson on 3000 port");
})