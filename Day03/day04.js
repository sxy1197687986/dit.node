// 流的类型？ 四种
// readable stream 可读流   writeable stream 可写流
// duplex 双工流（可读可写） Transform 转换流
// 数据的压缩  zlib

var zlib =require("zlib")
var fs =require("fs")
var readStream=fs.createReadStream("./1.txt")
var writeStream =fs.createWriteStream("./1.txt.gz")
readStream.pipe(zlib.createGzip()).pipe(writeStream)