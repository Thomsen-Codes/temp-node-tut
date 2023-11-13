const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else if (req === "/favicon.ico") {
    req.end();
  } else {
    res.end(`
  <h1>Ooops!</h1>
  <p>We cant seem to find the page you are looking for</p>
  <a href='/'>Back Home</a>`);
  }
});

server.listen(5000);

//1.45.23
