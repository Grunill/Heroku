// console.log(__filename);
// console.log(__dirname);

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        fs.readFile(path.join(__dirname,'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/about'){
        fs.readFile(path.join(__dirname,'about.html'), (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/videos'){
        fs.readFile(path.join(__dirname,'video.html'), (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/todo'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('ToDo');
        res.end();
    }
});

server.listen(process.env.PORT || 5000);