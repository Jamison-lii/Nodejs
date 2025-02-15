const http = require('http');
const fs = require('fs');
const _ = require('lodash');




const server = http.createServer((req, res) => {
    console.log('Request made:', req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './Views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return; // Prevents further execution
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    console.log(`Serving file: ${path}`); // Debugging

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('<h1>Server Error</h1>');
            return;
        }
        res.write(data);
        res.end();
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000...');
});
