/*
 * 需求：发起HTTP GET请求，获取所有服务端数据，统计长度，打印行数及数据
 * 提示：
 *  	方法1:把所有data收集起来，监听end事件，确定stream是否接收完成，完成后打印
 *		方法2:使用bl（buffer list）或concat-stream解决
 *			格式：     response.pipe(bl(function (err, data) { ... }))
 */

// 方法1:
var bl = require('bl');
const http = require('http');
var url = process.argv[2];
var result = '';
http.get(url,function(response){
	response.setEncoding('utf8');
	response.on('data',function(data){
		result += data;
	})
	response.on('end',function(){
		console.log(result.length);
		console.log(result);
	})
	response.on('error',console.error);
}).on('error',console.error)

// 方法2:
// var bl = require('bl');
// const http = require('http');
// var url = process.argv[2];
// http.get(url,function(response){
// 	response.pipe(bl(function(err,data){
// 		if(err){
// 			return console.log(err);
// 		}
// 		data = data.toString();
// 		console.log(data.length);
// 		console.log(data);
// 	}));
// })