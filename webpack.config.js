var  path = require('path');
const  webpack =require('webpack');
module.exports = {
    entry: './server/server.js',
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    watch:true,
    target: 'node'
};
