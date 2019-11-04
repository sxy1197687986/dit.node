var express =require("express")
var app =express()
app.get("/get",(req,res)=>{
    console.log(arguments)
    res.send({"success":"get请求成功","data":[{"name":"tom","age":12}]})
})
app.post("/list",(req,res)=>{
    res.send({"success":"post请求成功","data":[{"name":"tom","age":12}]})
})
// all代表的所有
app.all("./",(req,res)=>{
    res.send({"data":"数据请求"})
})
app.listen(3000)