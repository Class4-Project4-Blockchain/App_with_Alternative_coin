const LoginDAO = require("../models/Login.js");
const usebcrypt = require("../util/com.ecum.auth/usebcrypt");

// console.log("Linked Loign Implements")
module.exports = {
    
    //let api = dictionary
    public_string_AccountCheck: async (id, pw) => {
        if(id==undefined || pw==undefined) return console.log("undefined", id, pw);
        let CORRECT = 1 || "true", INCORRECT = 0 || "false";
        let id_check = await LoginDAO.AccountCheck.SelectID(id);
        let compareValue = await LoginDAO.AccountCheck.SelectPW(id, pw);
        let pw_check = await usebcrypt.comparehash(pw, compareValue );

        if (id_check == INCORRECT) {
            // console.log("exist", "id :", id, "pw :", pw);
            return ({ result: INCORRECT, message: "아이디가 존재하지 않거나 확인이 필요합니다.", id: id_check });
        }
        else if (id_check == CORRECT && pw_check == INCORRECT) {
            // console.log("exist ", "id :", id, "pw :", pw);
            return ({ result: INCORRECT, message: "패스워드를 다시 확인해주세요.", id: id_check, pw:pw_check });
        }
        else if (id_check == CORRECT && pw_check == CORRECT) {
            // console.log("exist ", "id :", id_check, "pw :", pw_check);
            return ({ result: CORRECT, message: "로그인 성공"})
        }
        else {
            console.log("exist ", "id :", id_check, "pw :", pw_check);
            return ({ result: id_check + " and " + pw_check, message: "통신에러. 다시 시도합니다."  })
        }
    }
    
}