var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

socket.bind(3000);

socket.on("listening", function(){
    console.log("listening Event");
});

socket.on("message", function(msg, rinfo){
    console.log("메세지 도착", rinfo.address, msg.toString());
    var msg_return = new Buffer("message is returned");
    socket.send(msg_return, 0, msg_return.length, 3001, "127.0.0.1", function(err){
        if(err){
            console.log("UDP message err", err);
            return;
        }
        console.log("메세지 전송 성공")
    });
});

socket.on("close", function(){
    console.log("close event");
});
