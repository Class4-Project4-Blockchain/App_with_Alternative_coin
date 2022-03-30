const getConn = require("../util/db.js");

module.exports = {
    AccountCheck: {
        SelectID : async (userid) => {
            // let id = userid.toString();
            // console.log("DAO-> userid chk : ", userid);
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT count(*) FROM users WHERE id='${userid}'`; 
                        conn.query(sQuery, (err, result, field) => { 
                            // console.log(err);
                            // console.log("DAO-> query userid chk result  : ", JSON.stringify(result));
                            // console.log("DAO-> query userid chk result  : ", result[0]["count(*)"]);
                            resolve(result[0]["count(*)"]);
                            
                        }); 
                        conn.release();
                    } catch (err) { reject(console.error(err)); }
                })
            })
        },
        SelectPW : async (userid, pwd) => {
            // let pwd = userpwd.toString()
            // console.log("DAO-> hashed pwd chk : ", pwd);
            return new Promise((resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT pwd FROM users where id='${userid}'; `; 
                        conn.query(sQuery, (err, result) => { 
                            console.log(JSON.stringify(result))
                            if(result[0]["pwd"]== "") return console.log("undefined");
                            return resolve(result[0]["pwd"]);
                        });
                        conn.release();
                    } catch (err) { console.err(err); }
                })
            })
        },
    },
}