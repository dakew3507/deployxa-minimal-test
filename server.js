const http = require('http');

const host = '0.0.0.0';
const port = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  if (req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('hello from deployxa minimal test\n');
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('not found\n');
});

server.listen(port, host, () => {
  console.log(`listening on ${host}:${port}`);
});
