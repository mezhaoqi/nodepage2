const path = require('path');
//导入mssql 模块
const conn = require(path.join(__dirname, '../db/index.js'));

const getPages = (req, res) => {
    const currentPage = Number(req.query.page) || 1;//默认第一页
    const pageSize = 10;
    let totalPage = 0;
    //按照时间降序分页查询
    const sql = `select * from pages order by timedate desc limit ${(currentPage - 1) * pageSize} , ${pageSize};
    select count(*) as count from pages`;
    conn.query(sql, (err, result) => {
        if (err) {
            res.render('index.html', {
                articles: []
            })
        }
        totalPage = Math.ceil(result[1][0].count / pageSize);
        res.render('index.html', {
            totalPage: totalPage,
            articles: result[0],
            currentPage:currentPage
        })
    })
}

module.exports = {
    getPages
}