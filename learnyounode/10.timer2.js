// 使用strftime
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  socket.end(strftime('%F %R', new Date()) + '\n')
})

server.listen(Number(process.argv[2]))