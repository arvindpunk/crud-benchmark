#! /usr/local/bin/node
// Source: https://gist.github.com/aaryanporwal/2d8c5f822b1c12af217314cde59eb4ed

const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 4000;
let setObj = {}

const server = http.createServer((req, res) =>  {

  const parsedURL = url.parse(req.url); 

  if (parsedURL.pathname === `/set`) {
    // storing the query string in an object like -> { somekey: 'somevalue'}
    const [key, value] = parsedURL.query.split('=')
    setObj[key] = value;

    console.log(setObj);

    res.write(`Successfully stored '${key}' with the value '${value}' in memory`);
  }
  else if (parsedURL.pathname === `/get`) {
   let getObj = {}
   const [key, value] = parsedURL.query.split('=')
   getObj[key] = setObj[value];
   
   console.log(getObj);
   
   res.write(`Successfully retrieved the value '${setObj[value]}' of '${value}' from memory and stored at '${key}'.`);
  }
  else {
    res.write(`<h1>Welcome to the Database Server</h1>`);
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});