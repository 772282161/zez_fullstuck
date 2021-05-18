const mime = require('mime-types');
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  if (/^\/image\/.*/.test(url) && method === 'GET') {
    fs.readFile('./public/a.jpg', (err, chunk) => {
      if (err) {
        res.write(err);
        res.writeHead(404, {
          'Content-type': 'text/html',
        });
        res.end();
      } else {
        res.writeHead(200, {
          'Content-type': mime.contentType('jpg'),
          // 'image/jpeg'
        });
        res.end(chunk);
      }
    })
  } else if (/ ^\/data\/.+/.test(url)) {
    res.write(url)
    res.end()
  } else {
    res.writeHead(404, {
      'content-type': 'text/plain ;charset=utf-8',
    })
  }
  // res.write(`url:${url}\n`);
  // res.write(`method: ${method}\n`);
  // res.write(`headers:${JSON.stringify(headers, null, ' ')}\n`);
  res.end('路径不存在');

  server.listen(9527, () => {
    console.log('Web Server started at port 9527')
  })
})
