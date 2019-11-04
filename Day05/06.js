
var exprsee=require("express")
var app=exprsee()
// 路由中间件
var router=exprsee.Router()
app.use(router)
// 验证码接口
router.get("/",(req,res)=>{
res.send("router")
})
router.get("/code",(req,res)=>{
    // 随机数  Mtah.Random
    var Random=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str="asdasdwqafsafsafdsadqw123456789"
    var strr=""
    for(var i=0;i<4;i++){
        strr+=str[Random(0,str.length-1)]
    }
    res.send({"success":"请求成功","data":strr})
})
app.listen(3000)