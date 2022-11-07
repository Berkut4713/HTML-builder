var fs = require('fs');
fs.readFile('./01-read-file/text.txt', function (err, logData) {
  if (err) throw err;
  let text = logData.toString();
  console.log(`${text}`);
});
