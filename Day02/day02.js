// 定义一个路由文件router.JSON.
var http = require("http")
var fs =require("fs")
var router = require ("./router")
http.createServer((req,res)=>{
    switch(req,res){
    case "/":router.home(req,res)
    break
    case "/about":router.about(req,res)
    break
    case "/news":router.news(req,res)
    break
    }
}).listen(3000)