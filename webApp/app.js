var http = require('http');
var server = http.createServer((req,res)=>{
   res.end('Hello world!');

});
server.listen(5000);
console.log('server is running!');