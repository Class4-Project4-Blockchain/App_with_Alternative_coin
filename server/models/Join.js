const getConn = require("../util/db");

exports.addAccount = {
    addAccount:async (userid, hashpwd, email)=> {
        return new Promise( (resolve, reject) => {
            getConn((conn) => {
                try {
                    let sQuery = `INSERT INTO users (id , pwd, email) VALUES ( '${userid}', "${hashpwd}", "${email}");`;
                    conn.query(sQuery, (err, result) => {  resolve(result); 
                        // console.log("adduser result:", result)
                    });
                    conn.release();
                } catch (err) { console.error(err); }
            })
        })   
    } 
}
    
    