// myhttpmodule.js
const http = require('http');

module.exports = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();

  res.write(`Current Date and Time: ${formattedDate}`);
  res.write(`prac7 21162101019_shivam      changes done.`);
  res.end();
});
