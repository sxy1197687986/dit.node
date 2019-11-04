var http=require("http")
// 服务器模块
var form=require("formidable")
// 解决文件上传模块
// formidable模块实现了上传和编码图片和视频。它支持GB级上传数据处理，支持多种客户端数据提交。
var path=require("path")
// 处理文件路径
var fs=require("fs")
// 文件系统
var sd=require("silly-datetime")
// 时间npm
http.createServer((req,res)=>{
    if(req.url=="/dopost"){
        // formidable 下的一种方法
        var fm=form.IncomingForm()
        fm.uploadDir="./uploads"
                 // fields  文本域  files  文件域
        fm.parse(req,function(err,fields,files){
            var low=files.pic.path
            // 获取到图片原本的地址，不加后缀名
            // path文件路径
            // pic图片

            var extname=path.extname(files.pic.name)
            // extname 获取文件后缀名   


            var time=sd.format(new Date(),"YYYYMMDDHHmmss")
            var fanishon="./uploads/"+time+extname
            // 拼接出一个新的地址名，用于储存图片

            console.log(fanishon)


            // 将之前文件的地址名替换为新拼接出的名字，直接改变文件的储存位置和名字
            fs.rename(low,fanishon,(err)=>{
                if(err) throw err
            })
            res.end("success")
        })
    }
}).listen(3000)