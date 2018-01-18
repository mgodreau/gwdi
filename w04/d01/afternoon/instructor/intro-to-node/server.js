require('dotenv').config({ silent: true });
console.log(process.env.TERM_PROGRAM);

const http = require('http');
var Student = require('./student');

var me = new Student('Foobar', 'Dallas', 1);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log('req', req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log('res', res);
  res.end('<h1>Hello ' + me.firstName + '</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
