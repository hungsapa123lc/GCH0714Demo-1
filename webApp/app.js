var http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p style="color:red">This is Home Page.</p></body></html>');
        res.end();
    }else if(req.url=='/student'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p style="color:blue">This is student Page.</p></body></html>');
        res.end();
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p style="color:blue">Other pages</p></body></html>');
        res.end();
    }
    
});
server.listen(5000);
console.log('server is running!');