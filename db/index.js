const mysql = require('mysql');

conn = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'nodepages',
    host: '127.0.0.1',
    multipleStatements: true
});

module.exports = conn;