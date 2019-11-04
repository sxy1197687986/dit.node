var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var obj = url.resolve("http://localhost:3000","/new")
    console.log(obj)
    res.end()
}).listen(3000)