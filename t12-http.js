const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to our About page");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a href="/">back Home</a>
    `);
});

server.listen(1000);
