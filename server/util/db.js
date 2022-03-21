const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
const con = mysql.createPool(dbConfig);

// ↓ 모듈화 시킨 부분(공통 부분)
const getConn = (callback) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connection Success");
        
        callback(connection);
    });
};
// ↑ 모듈화 시킨 부분

getConn;

module.exports = getConn;