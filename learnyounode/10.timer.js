/*
 * 需求：服务器监听端口，获取一些TCP连接；针对每一个TCP连接，都必须写入当前日期和24小时制的事件
 *		格式：YYYY-MM-DD hh:mm
 *		
 * 参数：
 *		宽口号
 */

// 这是一个TCP Server
// 方法1
// var net = require('net');
// var formatDate = require('./date.js')
// var port = Number(process.argv[2]);
// var server = net.createServer(function(socket){
// 	var date = new Date()
// 	var dateStr = formatDate(date,"YYYY-MM-DD hh:mm")
// 	socket.write(dateStr + '\n')
// 	socket.end();
// })
// server.listen(port);

// 方法2
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))