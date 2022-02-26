const http = require('http');
const fs = require('fs').promises;
const hostname = '127.0.0.1';
const port = 5000;


let indexFile; // WHEN PROGRAM IS RUN THIS WILL HOLD HTML FILE'S CONTENTS
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(indexFile); // REQUEST RETURNS DATA LOADED AT STARTUP
});

// READ FILE & SAVE CONTENTS IN indexFile VARIABLE
fs.readFile(__dirname + "/part7.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, hostname, () => {
            console.log(`Server is running on http://${hostname}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);//EXIT WITHOUT STARTING SERVER
    });
