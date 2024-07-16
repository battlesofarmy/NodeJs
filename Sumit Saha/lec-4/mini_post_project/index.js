const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('<html><body><form method="post" action="/process"> <input name="message" /> </form></body></html>')
        res.end();


    }else if(req.url === '/process' && req.method === 'POST'){
        req.on('data',(chunk)=>{
            console.log(chunk)
        })
        res.write("Thank you for Submitting");
        res.end();
    }else{
        res.write("end");
        res.end();
    }
})


server.listen(3000,()=>{
    console.log("Lesson on 3000 port");
})