var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req, res){
	res.sendFile('/Users/dayeonhwang/Documents/Hi/index.html');
});

http.listen(5000,function(){
	console.log('listening on *:5000');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
io.emit('some event', { for: 'everyone'});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
	
