const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
/*var http = require('http')
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var express = require('express');
var app = express();

app.get('/', function(request, response) {
  fs.readFile(`test.html`, 'utf8', function(err, description){
    template = description;
    response.writeHead(200);
    response.send(template);
  });
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
*/
