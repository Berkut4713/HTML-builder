var fs = require('fs');

var stream = new fs.ReadStream(__dirname + '/text.txt');
var string = '';
var part = '';

stream.on('data',function(data){
  string += data.toString();
});

stream.on('end',function(){
  console.log(string);
});

