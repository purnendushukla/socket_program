const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res)=>{
    // res.sendFile(__dirname+'/index.html');
    res.render('index.ejs')
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message:' + msg);
        io.emit('chat message', msg);
    })
})

http.listen(port,()=>{
    console.log("Server started on port:"+port);
})
