const { hash } = require("bcrypt");
const AccountDao = require("../com.ecum.auth/accountDao.js");
const usebcrpyt = require("../com.ecum.auth/usebcrypt");
module.exports = {
    public_string_AddAccount: async (userid, pwd, email) => {
        let id_check = await AccountDao.AccountCheck.SelectID(userid);
        console.log("I", userid, pwd, email);
        if(id_check >0){
            console.log("id가 존재함")
            return "아이디가 존재합니다.";
        }
        else if(id_check == 0){
            let hashedPWD = await usebcrpyt.gethash(pwd);
            let result = await AccountDao.addAccount(userid, hashedPWD, email );
            console.log(result);
        }
        else {
            throw err;
        }
    },
}