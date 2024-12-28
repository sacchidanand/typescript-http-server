"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const PORT = process.env.PORT || 3000;
// function to handler request and response
const requestHandler = (req, res) => {
    const { method, url } = req;
    // basic routing
    if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, nodejs with TypeScript !');
    }
    else if (method === 'GET' && url === '/api') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify({ message: 'Welcome to the API Sacchidanand!' }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found !');
    }
};
// Create HTTP server 
const server = (0, http_1.createServer)(requestHandler);
// server listening; start the server 
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
