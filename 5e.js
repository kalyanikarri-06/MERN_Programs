const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
res.write("data transferred successfull using http module");
res.end();
}).listen(3000)
console.log("server running at http://localhost:3000");