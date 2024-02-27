const myHttpModule = require('./dateTime');

const port = process.env.PORT || 3000;

myHttpModule.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

























// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Serve static files from the current directory
// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index1.html');
// });

// app.listen(port, () => {
//   console.log(`Express server running on port ${port}`);
// });

// const http = require('http');
// const fs = require('fs');

// const log = function (entry) {
//   fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
// };

// const server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     let body = '';

//     req.on('data', function (chunk) {
//       body += chunk;
//     });

//     req.on('end', function () {
//       if (req.url === '/') {
//         log('Received message: ' + body);
//       } else if (req.url === '/scheduled') {
//         log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
//       }

//       res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
//       res.end();
//     });
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(html);
//     res.end();
//   }
// });

// // Listen on the specified port
// server.listen(port);

// // Put a friendly message on the terminal
// console.log(`Combined server running at http://127.0.0.1:${port}/`);
