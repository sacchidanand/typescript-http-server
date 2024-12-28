import {createServer, IncomingMessage, ServerResponse} from 'http';

const PORT = process.env.PORT || 3000;

// function to handler request and response
const requestHandler = (req: IncomingMessage, res:ServerResponse) => {
    const {method, url} = req;

    // basic routing
    if (method === 'GET' && url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, nodejs with TypeScript !');
    } else if (method === 'GET' && url === '/api') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify({message : 'Welcome to the API Sacchidanand!'}));  
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found !');
    }
};

// Create HTTP server 
const server = createServer(requestHandler);


// server listening; start the server 

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
