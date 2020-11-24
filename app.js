const http = require('http');
const fs = require('fs');
var port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
    console.log('Server made');


    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else {
            res.write(data);
            res.end();
        }
    })
})

server.listen(port, () => {
    
    console.log("Server made")
})