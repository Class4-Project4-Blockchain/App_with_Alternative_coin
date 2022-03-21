const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
const con = mysql.createPool(dbConfig);

const getConn = (callback) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connection Success");
        
        callback(connection);
    });
};

getConn;

module.exports = getConn;