const getConn = require("../db.js");
// console.log("Linked Loign DAO")

module.exports = {
    AccountCheck: {
        SelectID : async (userid) => {
            // let id = userid.toString();
            console.log("DAO-> userid chk : ", userid);
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT count(*) FROM users WHERE id='${userid}'`; 
                        conn.query(sQuery, (err, result, field) => { 
                            // console.log(err);
                            // console.log(field);
                            console.log("DAO-> query userid chk result  : ", result);
                            resolve(result);
                            return result;
                        }); 
                        conn.release();
                    } catch (err) { console.error(err); }
                })
            })
        },
        SelectPW : async (userid, hashedPwd) => {
            // let pwd = userpwd.toString()
            console.log("DAO-> hashed pwd chk : ", hashedPwd);
            return new Promise((resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT count(*) FROM users where id='${userid}' and pwd='${hashedPwd}'; `; 
                        conn.query(sQuery, (err, result) => { resolve(result);
                        console.log("DAO-> query userpwd result :", result);
                        });
                        conn.release();
                    } catch (err) { console.err(err); }
                })
            })
        },
    }
}