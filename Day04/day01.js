var http=require("http")
var fs=require("fs")
var art=require("art-template")
http.createServer((req,res)=>{
    // if(req.url=="/favicon.ico"){
    //     return
    // }
    fs.readFile("./art/index.art",(err,data)=>{
        var tem=data.toString()
        var list=["tom","js","node"]
        var resl=art.render(tem,{list:list})
        res.end(resl)
    })
}).listen(3000)