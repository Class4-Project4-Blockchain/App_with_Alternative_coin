const getConn = require("../db.js");

exports.addAccount = (userid, hashpwd, email)=> {
        return new Promise((resolve, reject) => {
        //construct
            // let id = userid.toString();
            // let pwd = hashpwd.toString();
            // let mail = email.toString();
            // console.log("JOIN_DAO_\n", typeof(userid), userid,  "\npwd", typeof(hashpwd), hashpwd,"\nemail", typeof(email), email );
        //DAO
            getConn((conn) => {
                try {
                    //INSERT INTO users (id , pwd, email) VALUES ( 'aaa', 1234, "abc");
                    let sQuery = `INSERT INTO users (id , pwd, email) VALUES ( '${userid}', "${hashpwd}", "${email}");`;
                    // let sQuery = "insert into users (id, pwd, email) values ('abc', 'aa', '1234')";
                    conn.query(sQuery, (err, result) => { resolve(result); 
                        // console.log(result) 
                    });
                    conn.release();
                } catch (err) { console.error(err); }
            })
        })    
}
    
    