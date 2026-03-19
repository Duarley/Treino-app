const http = require("http");
const fs = require("fs");
const path = require("path");

const base = path.join(__dirname, "www");
const port = Number(process.env.PORT) || 8000;
const host = "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json; charset=utf-8"
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath);
  const type = MIME[ext] || "application/octet-stream";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const file = url === "/" ? "/index.html" : url;
    const filePath = path.join(base, file);
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        sendFile(res, filePath);
        return;
      }
      const hasExt = path.extname(file) !== "";
      if (!hasExt) {
        sendFile(res, path.join(base, "index.html"));
        return;
      }
      res.writeHead(404);
      res.end("Not found");
    });
  })
  .listen(port, host);

console.log(`Rodando em http://127.0.0.1:${port}`);
