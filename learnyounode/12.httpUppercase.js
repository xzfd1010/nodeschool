/*
 *	功能：接收POST请求，将POST请求的主体(body)所带的字符串转换成大写形式，然后返回给客户端
 *	参数：端口号
 *	提示：使用throught2-map模块
 *		功能：接收一个数据块，处理完后返回这个数据块
 */
/*
 * 范例：
	var map = require('through2-map');
	inStream.pipe(map(function(chunk){
		return chunk.toString().split('').reverse().join('')	
	})).pipe(outStream);
 */

 var http = require('http');
 var map = require('through2-map');

 var port = Number(process.argv[2]);
 var server = http.createServer(function(req,res){
 	if(req.method !== 'POST'){
 		return res.end('send me a POST\n');
 	}
 	// req就是一个inStream
 	req.pipe(map(function(chunk){
 		return chunk.toString().toUpperCase()
 	})).pipe(res)
 })
 server.listen(port)

