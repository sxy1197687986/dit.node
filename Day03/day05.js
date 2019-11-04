// 什么是buffer？
// 从类型来说，就是一个类数组
// 从内存来说，就是开辟新内存空间
// 作用：
// 处理二进制数据
// 解决数据传输过大
// 案例：文件流    事件流    TCP
// 别名：缓存区（等待区）
// 什么是二进制数据？八进制  十六进制
// 返回 0和1
// 创建buffer？
// new buffer()废弃
// 因为buffer是一个全局对象，所以不需要通过require下载
// buffer可以传输的类型 string arry
// var buf =Buffer.from
// console.log(buf)

// buffer的编码类型？
// utf-8   base64  hex  Ascii   unicode
// buffer和cache的区别？
// buffer相当于临时居住地   cache永久的家

// buffer下面有哪些方法？
// tojson   tostring  slice  contant  length

// Buffer.from()  ()里面是string Buffer ArrayBuffer Array or Array-like Object

// 第一种定义buffer的方式
// buffer.from   把字符串转buffer
// var buf =buffer.from("node")>
// <buffer 6e 6f 64 65>
// var buf= buffer.from()
// 返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf =buffer.alloc(10)

// 不安全不推介使用   未被初始化的buffer
// var buf =buffer.allocUnsafe(10)

// var buf =Buffer.from("node")
// // console.log(buf)
// buf =Buffer.alloc(10)
// for(var x=0;x<10;x++){
//     buf[x] = x+97;
// }
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0,5));
// console.log(buf.toString('utf8',0,5))
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

const buf =Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json =JSON.stringify(buf);
console.log(json)