'use strict';

const http= require('http');
const contacts = require('./contacts.js');

(async () => {
    const server = http.createServer((request, response) => {
        response.setHeader('Content-Type', 'application/json');

        const {url} = request;

        if (url === '/contacts'){
            const {method}= request;

            if (method === 'POST'){
                let body = '';

                request.on('data', (chunk)=>{
                    body += chunk.toString();
                })
                respose.statusCode = 200
                return respose.end(JSON.stringify({
                    data: body
                }))
            }else {
                response.statusCode = 400;
                return respose.end(JSON.stringify({
                    message : "BAd Request", 
                    data : []
                }))
            }
        }else {
            response.statusCode = 404;
            return respose.end(JSON.stringify({
                message : "Endpoint Not Found", 
                data : []
            }))
        }
    })

await server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000');
});
})();