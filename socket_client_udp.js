var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

socket.bind(3001);

var msg = new Buffer("hello UDP Reciever");

socket.send(msg, 0, msg.length, 3000, "127.0.0.1", function(err){
    if(err){
        console.log("UDP message error", err);
        return;
    }
    console.time("elapsed");
    console.log("메세지 전송 성공");
    // socket.close();
});

socket.on("message", function(msg, rinfo){
    console.log("서버로부터 메세지 도착", rinfo.address, msg.toString());
    console.timeEnd("elapsed");
});
    