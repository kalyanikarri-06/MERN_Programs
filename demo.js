//sever.js
var http = require('http');
http.createServer(function(req,res)
{
    res.writeHead (300,{'Content-Type':'text/html'});
    res.write('<h2>JavaScript executed using Node.js Sever </h2>');
    res.end();
}).listen(3000)
console.log("server running at http: //localhost:3000");