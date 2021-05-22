/*
 * @Author: your name
 * @Date: 2021-05-22 15:52:23
 * @LastEditTime: 2021-05-22 21:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /AJAX-learning/server.js
 */
var http = require("http")
var fs = require("fs")
var url = require("url")
var port = process.argv[2]

if (!port) {
  console.log("请指定端口号\n例如：node server.js 8888 ")
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ""
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"))
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  console.log("有请求过来啦！路径（带查询参数）为：" + pathWithQuery)

  if (path === "/index.html") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.write(fs.readFileSync("public/index.html"))
    response.end()
  } else if (path === "/main.js") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/javascript;charset=utf-8")
    response.write(fs.readFileSync("public/main.js"))
    response.end()
  } else if (path === "/1.css") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/css;charset=utf-8")
    response.write(fs.readFileSync("public/1.css"))
    response.end()
  } else if (path === "/2.js") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/javascript;charset=utf-8")
    response.write(fs.readFileSync("public/2.js"))
    response.end()
  } else if (path === "/3.html") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.write(fs.readFileSync("public/3.html"))
    response.end()
  } else if (path === "/4.xml") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/xml;charset=utf-8")
    response.write(fs.readFileSync("public/4.xml"))
    response.end()
  } else if (path === "/5.json") {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/json;charset=utf-8")
    response.write(fs.readFileSync("public/5.json"))
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.write(`当前路径尚不存在`)
    response.end()
  }
})

server.listen(port)
console.log("监听 " + port + " 成功\n打开 http://localhost:" + port)
