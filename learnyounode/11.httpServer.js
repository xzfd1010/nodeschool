/* 功能：将请求的文件返回给客户端
 * 参数：
 * 		param1:端口号
 *		param2:需要响应的文本文件的位置
 * 提示：
 * 		使用fs.createReadStream()以stream的形式作出请求响应，返回一个stream对象
 *		该对象可以使用 src.pipe(dst)的语法把数据从src流传输(pipe)到dst流中
 *		通过这种形式，可以轻松的把一个文件系统的stream和一个HTTP响应的stream连接起来
 */
var fs = require('fs')
var http = require('http');

var portNumber = Number(process.argv[2]);
var url = process.argv[3];
var server = http.createServer(function(req,res){
	// response.writeHead(statusCode, [reasonPhrase], [headers])#
	res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8'})
	// fs.createReadStream(path, [options])#
	// Returns a new ReadStream object (See Readable Stream).
	// readable.pipe(destination, [options])#
	// destination是写入的流
	fs.createReadStream(url).pipe(res);
})
server.listen(portNumber)