const JoinDAO = require("./JoinDao.js");
const bcrypt = require("bcryptjs");

module.exports = {
    //let api = dictionary
    // let variable = callback(){};
        protect_string_AddAccount: async (userid, pwd, email) => {
        // let id = userid;
        // let email = email;
        let hashedPWD = await bcrypt.hash(pwd.toString(), 8);
        // console.log(userid, email, hashedPWD );
        return await JoinDAO.addAccount(userid, hashedPWD, email );
            
        },
}