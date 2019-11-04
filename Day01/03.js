var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var obj = url.parse(req.url,true).query
    res.end("接受的username:"+obj.username)
}).listen(3000)
