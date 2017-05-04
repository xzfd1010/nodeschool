/*
 * 需求1：HTTP服务器，每当接收到一个路径为'api/parsetime'的GET请求时，就响应一些JSON数据
 *  	期望请求会包含一个查询参数(query string),key是'iso',值是ISO格式的事件
 * 示例：
 	/api/parsetime?iso=2013-08-10T12:10:15.474Z

  	所响应的 JSON 应该只包含三个属性：'hour'，'minute' 和 'second'。例如：

 	{
       "hour": 14,
       "minute": 23,
       "second": 15
    }
 * 需求2：另一个接口，'api/unixtime'，接收相同的参数，但是返回值会包含一个属性'unixtime'，相应值是一个UNIX时间戳
 * 示例：
 *		 { "unixtime": 1376136615474 }
 * 参数：端口
 *
 */

var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);
var server = http.createServer(function(req,res){
	// 返回值：
	/*
		Url {
		  protocol: null,
		  slashes: null,
		  auth: null,
		  host: null,
		  port: null,
		  hostname: null,
		  hash: null,
		  search: '?iso=2013-08-10T12:10:15.474Z',
		  query: { iso: '2013-08-10T12:10:15.474Z' },
		  pathname: '/api/parsetime',
		  path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z',
		  href: '/api/parsetime?iso=2013-08-10T12:10:15.474Z' }
	*/
	var urlObj = url.parse(req.url, true)
	
	var query = urlObj.query.iso;
	var date = new Date(query);
	// date.setTime(Date.parse(query));
	
	if(urlObj.pathname === '/api/parsetime'){
		var json = {
			"hour":date.getHours(),
			"minute":date.getMinutes(),
			"second":date.getSeconds(),
		};
	}else if(urlObj.pathname === '/api/unixtime'){
		var json = {
			"unixtime" : date.getTime()
		}
	}
	var jsonStr = JSON.stringify(json);
 	res.writeHead(200, { 'Content-Type': 'application/json' })
 	res.end(jsonStr + '\n')
})
server.listen(port);

// 官方答案：封装的更好
    // var http = require('http')
    // var url = require('url')

    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }

    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }

    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result

    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }

    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))
