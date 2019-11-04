var express =require("express")
var app =express()
app.get("/",(req,res)=>{
    console.log(arguments)
    res.send({"success":"ok","data":[{"name":"tom","age":12}]})
})
app.listen(3000)