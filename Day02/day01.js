var http = require("http");
var querystring = require("querystring");
// var obj = querystring.parse("name =tom&sex=0")
// var obj =querystring.stringify({name:'tom',sex:'0',id:'1'})
// var obj =querystring.escape("name = 小明")
var obj =querystring.unescape("name%20%3D%20%E5%B0%8F%E6%98%8E")
console.log(obj)

// querystring字面上的意思就是查询字符串，一般是对http请求所带的数据进行解析。querystring模块只提供4个方法：

// querystring.parse(序列化)
// querystring.stringify(反序列化)
// querystring.escape(编码)
// querystring.unescape(编码)
// 这4个方法是相对应的。

// 首先，使用querystring模块之前，需要require进来：
// 1 querystring.parse(str,separator,eq,options)
// parse这个方法是将一个字符串反序列化为一个对象。

// 参数：

// str指需要反序列化的字符串;
// separator（可省）指用于分割str这个字符串的字符或字符串，默认值为"&";
// eq（可省）指用于划分键和值的字符或字符串，默认值为"=";
// options（可省）该参数是一个对象，里面可设置maxKeys和decodeURIComponent这两个属性：
// maxKeys：传入一个number类型，指定解析键值对的最大值，默认值为1000，如果设置为0时，则取消解析的数量限制;
// decodeURIComponent:传入一个function，用于对含有%的字符串进行解码，默认值为querystring.unescape。
// 在官方API的例子中，使用gbkDecodeURIComponent这个方法会报错，显示gbkDecodeURIComponent is no defined，
// 这是因为在使用这个gbkDecodeURIComponent这个方法之前需要先进行定义。
// 在API中也写了Assuming gbkDecodeURIComponent function already exists...这句话的意思是”
// 假设这个gbkDecodeURIComponent方法已经存在”。