const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;

// STORE DATA IN VARS AS STRING CONTAINING JSON FOR AN ARRAY OF BOOK OBJECTS
const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');//SET CONTENT TYPE IN HEADER
    //CREATE SWITCH STATEMENT TO RETURN CORRECT JSON
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(books);
            break
        case "/authors":
            res.writeHead(200);
            res.end(authors);
            break
        default: //CREATE ERROR FOR ANY OTHER PATH
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

