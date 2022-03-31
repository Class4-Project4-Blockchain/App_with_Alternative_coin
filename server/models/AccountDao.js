const getConn = require("../util/db");
// console.log("Linked Loign DAO")
module.exports = {
    AccountCheck: {
        SelectID : async (userid) => {
            // let id = userid.toString();
            // console.log("DAO-> userid chk : ", userid);
            return new Promise(  (resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT id FROM users WHERE id='${userid}'`; 
                        conn.query(sQuery, (err, result, field) => { 
                            // console.log(err);
                            console.log("DAO-> query userid chk result  : ", JSON.stringify(result));
                            // console.log("DAO-> query userid chk result  : ", result[0]["count(*)"]);
                            if(result[0]==undefined) return resolve("---Selected ID : none");
                            resolve(result[0]["id"]);
                            
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
                            if(result[0]==undefined) return resolve("wrong pwd")
                            return resolve(result[0]["pwd"]);
                        });
                        conn.release();
                    } catch (err) { console.err(err); }
                })
            })
        },
        SelectEmail : async (email) => {
            // let pwd = userpwd.toString()
            // console.log("DAO-> hashed pwd chk : ", pwd);
            return new Promise((resolve, reject) => {
                getConn((conn) => {
                    try {
                        let sQuery = `SELECT email FROM users where email='${email}'; `; 
                        conn.query(sQuery, (err, result) => { 
                            if(result[0]==undefined) return resolve("wrong pwd")
                            return resolve(result[0]["pwd"]);
                        });
                        conn.release();
                    } catch (err) { console.err(err); }
                })
            })
        },
    },
    addAccount:async (userid, hashpwd, email)=> {
        return new Promise( (resolve, reject) => {
            getConn((conn) => {
                try {
                    let sQuery = `INSERT INTO users (id , pwd, email) VALUES ( '${userid}', "${hashpwd}", "${email}");`;
                    conn.query(sQuery, (err, result, field) => {  resolve(result, field); 
                        console.log("adduser result:", result, field)
                    });
                    conn.release();
                } catch (err) { console.error(err); }
            })
        })   
    }, 
    getAccountInfo:async (userid)=> {
        return new Promise( (resolve, reject) => {
            getConn((conn) => {
                try {
                    let sQuery = `Select * from users where id=${userid}`;
                    conn.query(sQuery, (err, result) => {  resolve(result[0]); 
                        console.log("getAccountInfo result:", result)
                    });
                    conn.release();
                } catch (err) { console.error(err); }
            })
        })   
    } 
}