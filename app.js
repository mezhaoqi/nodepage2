const express = require('express');

const path = require('path')

const app = express();

//导入路由
const router = require(path.join(__dirname, './router/index.js'));

//配置express-art-template模板
app.engine('html',require('express-art-template'));
app.set('view engine','html');
app.set('views','./views');

//注册路由
app.use(router);

//托管静态资源
app.use('/node_modules',express.static('./node_modules'));

app.listen(3001, () => {
    console.log('running at http://127.0.0.1:3001/pages');
})
