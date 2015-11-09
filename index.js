var app = require('express')();
var http = require('http').Server(app);
http.listen(5000,function(){
	console.log('listening on *:5000');
});
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
npm install --save socket.io

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(5000,function(){
	console.log('listening on *:5000');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});