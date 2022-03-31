const LoginDAO = require("../models/AccountDao.js");
const usebcrypt = require("../utils/com.ecum.auth/usebcrypt");
const jwt = require("../utils/com.ecum.auth/jwt-use");
// console.log("Linked Loign Implements")
module.exports = {
    
    //let api = dictionary
    public_string_AccountCheck: async (id, pw) => {
        if(id == undefined || pw == undefined ) return {response: "deny", message:"빈칸을 확인해주세요."}
        let CORRECT = 1 || "true", INCORRECT = 0 || "false";
        let id_check = await LoginDAO.AccountCheck.SelectID(id);
        let compareValue = await LoginDAO.AccountCheck.SelectPW(id, pw);
        let pw_check = await usebcrypt.comparehash(pw, compareValue );

        if (id_check != id) {
            // console.log("exist", "id :", id, "pw :", pw);
            return ({ result: INCORRECT, message: "아이디가 존재하지 않거나 확인이 필요합니다.", id: id_check });
        }
        else if (id_check == id && pw_check == INCORRECT) {
            // console.log("exist ", "id :", id, "pw :", pw);
            return ({ result: INCORRECT, message: "패스워드를 다시 확인해주세요.", id: id_check, pw:pw_check });
        }
        else if (id_check == id && pw_check == CORRECT) {
            // console.log("exist ", "id :", id_check, "pw :", pw_check);
            let token = await jwt.generateAccessToken (id);
            console.log(token);
            
            return ({ result: id, message: "로그인 성공", access_token: token})
        }
        else {
            console.log("exist ", "id :", id_check, "pw check:", pw_check);
            return ({ result: id_check + " and compared " + pw_check, message: "통신에러. 다시 시도합니다."  })
        }
    }
    
}