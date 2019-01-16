'use strict';
const fs =require('fs');
console.log('Hello innerWorld');
const text = fs.readFileSync('index.html','utf8');
//console.log(text);
const http = require('http');
const server = http.createServer(function(req,res){
	const text = fs.readFileSync('index.html','utf8');
	const style = fs.readFileSync('style.css','utf8');

req.url=== '/style.css'? res.end(style):res.end(text);
console.log(req.method, req.url);
});	
server.listen(process.env.PORT||3000);
