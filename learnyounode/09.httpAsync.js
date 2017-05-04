/*
 *	需求：传递多个url，收集每一个url所返回的完整内容，将它们在终端输出。每个url的内容为1行，必须按照url的顺序打印
 *  难点：异步执行，每个服务器返回的内容的time不同，需要按顺序打印
 *	提示：跟踪url的数目，用一个队列存储起来，一旦全部返回，打印结果;结束的标志是count达到了url的个数
 */

var http = require('http');
var bl = require('bl');
var url = process.argv.slice(2);
// console.log(url);
// 用于存储结果的变量
var results = [];
// 用于计数的变量
var count = 0;
// 用let或者闭包？，保留变量的值
for (var i = 0; i < url.length; i++) {
	httpGet(i);
}

function httpGet(i) {
	http.get(url[i], function(response) {
		response.pipe(bl(function(err, data) {
			if (err) {
				return console.log(err);
			}
			results[i] = data.toString();
			count++;
			if (count === url.length) {
				printResults(count);
			}
		}))
	})
}

function printResults(count) {
	for (var i = 0; i < count; i++) {
		console.log(results[i]);
	}
}