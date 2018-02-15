const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const publicPath =path.join(__dirname ,'..' ,'public');
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('user conn');
    socket.on('disconnect', () =>{
        console.log('user disconnected from server')
    });
});
//for heroku deployment
const port = process.env.PORT || 3333;

server.listen(port,()=>{
    console.log(`server is on ${port} is up`);
});

