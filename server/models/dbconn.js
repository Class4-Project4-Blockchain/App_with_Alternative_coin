const db = require("mysql");
const path = require("path")
require("dotenv").config();
// const configs = require("./database.json")
const configs = {
   database: process.env.DBEXPLORER,
   host: process.env.DBHOST,
   port: process.env.DBPORT,
   user: process.env.USERS,
   password: process.env.PASS
}
const pool = db.createPool(configs)

const getConn =  function (callback){
   pool.getConnection((err, conn)=>{
   if(err) throw err;
   console.log("DB Pool!");
    callback(conn);
})
}


module.exports = getConn;

console.log("Ready To DBConnection..")