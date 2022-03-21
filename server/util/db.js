const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
require('dotenv').config();

const dbConf = { // 왜 안읽히지?? 일단 보류
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.PORT,
    commitLimit: process.env.COMMITLIMIT
}

console.log(process.env.HOST); // undefined

const con = mysql.createPool(dbConf);

const getConn = function(callback) {
    con.getConnection((err, connection) => {
        if(err) {console.error(err)}
        console.log("Connection Success");
        
        callback(connection);
    });
};

getConn;

module.exports = getConn;