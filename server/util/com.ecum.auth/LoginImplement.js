const LoginDAO = require("./LoginDao.js");
const bcrypt = require("bcryptjs");
// console.log("Linked Loign Implements")
module.exports = {
    //let api = dictionary
    protect_string_AccountCheck: async (id, pw)=> {
    let CORRECT = 1, INCORRECT = 0;
    id = await LoginDAO.AccountCheck.SelectID(id);

    pw = await bcrypt.hash(pw.toString(), 8);
    console.log("hashed :", pw);
    pw = await LoginDAO.AccountCheck.SelectPW(id, pw);


    if (id == INCORRECT){
        console.log("exist", "id :", id, "pw :", pw);
        res.json({rs:INCORRECT, msg:"아이디가 존재하지 않거나 확인이 필요합니다.", id: id});
    }
    else if(id == CORRECT && pw == INCORRECT){
        console.log("exist ", "id :", id, "pw :", pw);
        res.json({ rs: INCORRECT, msg : "패스워드를 다시 확인해주세요.", id: id });
    }
    else if(id == CORRECT && pw == CORRECT){
        console.log("exist ", "id :", id, "pw :", pw);
        res.json( {rs: CORRECT,  msg : "로그인 성공"})
    }
    else {
        console.log("exist ", "id :", id, "pw :", pw);
       return  ( { msg: "통신에러. 다시 시도합니다.", result: id + " and "+ pw })
    }
},
    getRead:{
        // let variable = callback(){};
        protect_string_UserCheck:(userid)=>{
            console.log("LoginImplement-> UserCheck");
            let USERID_CORRECT = 1;
            let USERID_NONE = 0;
            return LoginDAO.AccountCheck.SelectID(userid);
        },
        protect_string_PasswordCheck: async (userid, pwd)=>{
            console.log("LoginImplement-> PasswordCheck");
            let PASSWORD_CORRECT=1;
            let PASSWORD_INCORRECT=0;
            let PASSWORD_NOT_EQUAL=-1;
            
            let hashedPWD = await bcrypt.hash(pwd.toString(), 8);
            console.log(hashedPWD);
            // console.log("IMPL PWDCHECK Result Code :", await LoginDAO.AccountCheck.SelectID(userid));
            // console.log("IMPL IDCHECK Result Code :", await LoginDAO.AccountCheck.SelectPW(userid, hashedPWD));
            return await LoginDAO.AccountCheck.SelectPW(userid, hashedPWD);
        },
        auth:(req, res, next)=>{
		console.log("auth");
        }
        ,
        jwt:(req, res, next)=>{
            console.log("jwt test");
        }
        , 
    }
    }