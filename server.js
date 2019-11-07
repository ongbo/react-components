const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
import history from 'connect-history-api-fallback';

const app = express();
const config = require("./config.dev.js");
const compiler = webpack(config);


// 告诉 express 使用 webpack-dev-middleware
// 以及将 webpack.config.js 配置文件作为基础配置
// app.use(webpackDevMiddleware(compiler,{
//     noInfo: true,publicPath: config.output.publicPath,
// }));


app.use(history());

// 告诉 express 使用 webpack-dev-middleware
// 以及将 webpack.config.js 配置文件作为基础配置

app.use('/',webpackDevMiddleware(compiler,{
    publicPath: '/'
}))

//使用热模块替换
app.use(require("webpack-hot-middleware")(compiler));


// app.post('/login',bodyParser(),(req,res)=>{
//     res.contentType("text/html;charset=utf-8");
//     console.log(req.body.username);
//     console.log(req.body.password);
//     res.end("哈哈");
// })

// 将文件 serve 到端口 3000
app.listen(3000,function(){
    console.log("😳😏😜😙😝🙂😉😁😂😄😌☹️😕😔🤔🙄😑😒");
    console.log('http://localhost:3000');
});