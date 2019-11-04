var http = require("http")
var url = require("url")
var fs = require("fs")
http.createServer((req, res) => {
    // 读文件
    // fs.readFile("1.txt",(err,data)=>{
    //     res.end(data)
    // })
    //追加内容
    // fs.writeFile("2.txt", "我是内容absvgdask", {"flag": a}, (err) => {
    //     if (err) {
    //         // throw抛出
    //         throw err
    //     }
    //     res.end("success")
    // })
    // rename 改名
    //  fs.rename("./1.txt","./a.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    // unlink删除文件
    // fs.unlink("a.txt",(err)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.end("success")
    //     })
    // 创建文件夹
    // fs.mkdir("./aa", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })
    // 删除文件夹
    fs.rmdir("./aa", (err) => {
        if (err) {
            throw err
        }
        res.end("success")
    })
}).listen(3000)
// 复制文件
// 打开文件
// 关闭文件
// 判断当前目录里面的内容是文件还是目录