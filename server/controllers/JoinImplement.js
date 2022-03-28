const AccountDao = require("../models/AccountDao.js");
const usebcrpyt = require("../util/com.ecum.auth/usebcrypt");
module.exports = {
    public_string_AddAccount: async (userid, pwd, email) => {
        let id_check = await AccountDao.AccountCheck.SelectID(userid);
        console.log("I", userid, pwd, email);
        if(id_check >0){
            console.log("id가 존재함")
            return {response: "deny", message:"아이디가 존재합니다."};
        }
        else if(id_check == 0){
            let hashedPWD = await usebcrpyt.gethash(pwd);
            let result = await AccountDao.addAccount(userid, hashedPWD, email );
            console.log(result);
            return {response: "success", messgae: "계정이 생성되었습니다.", account: "id : "+userid + "pw : "+pwd}
        }
        else {
            throw err;
        }
    },
}