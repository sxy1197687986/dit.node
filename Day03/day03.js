// 监控日志 readline
var fs =require("fs")
var readline =require("readline")
var readStream= fs.createReadStream("./1.txt")
var rl = readline.createInterface({
    // 监听输入数据
    input:readStream
})
rl.on("line",(lineData)=>{
    console.log(lineData)
    console.log(new Date()+"linenum执行")
})
// 日志执行事件
rl.on("close",()=>{
    console.log("line监听数据完毕")
})