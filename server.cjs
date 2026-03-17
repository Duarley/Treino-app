const http = require("http");
const fs = require("fs");
const path = require("path");

const base = path.join(__dirname, "www");

http.createServer((req, res) => {
  let file = req.url === "/" ? "/index.html" : req.url;
  file = path.join(base, file);

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.end(data);
  });
}).listen(3000, "127.0.0.1");

console.log("Rodando em http://127.0.0.1:3000");
