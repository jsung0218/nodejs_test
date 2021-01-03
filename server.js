const http = require('http')
const port = 8001

const server = http.createServer(function (req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    }) // 헤더 정보를 적습니다.
    resp.write('Hello, World!') // 제공할 내용을 적습니다.
    resp.end()
})

server.listen( port, function(){
    console.log("서버가 실행되었습니다.")
})