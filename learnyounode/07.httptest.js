/* 功能：发起HTTP GET请求，所请求的URL为命令行第一个参数，然后将每一个'data'事件数据，以字符串形式在终端新一行打印
 * 参数：
 * 		param1:url
 * 提示：
 * 		使用http模块发起请求
 *		
 */
const http = require('http');
var url = process.argv[2];
http.get(url,function(response){
	response.setEncoding('utf8');
	response.on('data',function(data){
		console.log(data);
	});
	// 这里是处理错误
	response.on('error', console.error);
}).on('error', console.error);

// 官方给出的答案
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)