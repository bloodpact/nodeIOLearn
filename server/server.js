const path = require('path')
const express = require('express');

const app = express();

const publicPath =path.join(__dirname ,'../public');
app.use(express.static(publicPath));
//for heroku deployment
const port = process.env.PORT || 3333;

app.listen(port,()=>{
    console.log(`server is on ${port} is up`);
});

