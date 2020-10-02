var http = require('http')
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, body){
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${body}
  </body>
  </html>
  `;
}

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var template;
  //console.log(url)
  if(pathname === '/'){//main_page.js을 읽어와서 출력
        fs.readFile(`main_page.html`, 'utf8', function(err, description){
          template = description;
          response.writeHead(200);
          response.end(template);
        });
  }
  else if(pathname === '/views'){//login을 눌렀을때 로그인 페이지가 나오게 설계
  fs.readdir('/views', function(error, filelist){
      fs.readFile(`views/login.js`, 'utf8', function(err, description){
      //  template = description;
        template = description;
        response.writeHead(200);
        response.end(template);
      });
    });
  }

})

app.listen(3000);

console.log('Server running at http://localhost:3000');
