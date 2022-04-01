const AccountDao = require("../models/AccountDao.js");
const usebcrpyt = require("../utils/com.ecum.auth/usebcrypt");
module.exports = {
    public_string_AddAccount: async (userid, pwd, pwd2, email) => {
        try{
        if(userid == undefined || pwd == undefined || pwd2 == undefined || email == undefined) return {response: "deny", message:"빈칸을 확인해주세요."}
        else if(pwd != pwd2) return {response:"deny", message:"비밀번호를 확인해주세요."};
        
        let id_check = await AccountDao.AccountCheck.SelectID(userid);
        let email_check = await AccountDao.AccountCheck.SelectEmail(email);
        console.log("I", userid, pwd, pwd2,  email);
        console.log(id_check);
        if(id_check >0){
            console.log("id가 존재함")
            return {response: "deny", message:"아이디가 존재합니다."};
        }
        else if(email_check == email) return {response:"deny", message:"같은 이메일이 존재합니다."};
        else if(id_check == 0 ){
            let hashedPWD = await usebcrpyt.gethash(pwd);
            let result = await AccountDao.addAccount(userid, hashedPWD, email );
            console.log("계정생성 결과 :", result);
            return {response: "success", messgae: "계정이 생성되었습니다.", account: "id : "+userid + "pw : "+pwd}
        }
    }catch(err){console.error(err)}
        // else {
        //     console.log("err체크 필요")
        //     throw error;
        // }
    },
}