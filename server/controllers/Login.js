const LoginChk = require("./LoginImplement");
const jwt = require("../util/com.ecum.auth/jwt-use");
// console.log("Linked Loign Controller")

module.exports = {
  needs: () => upload,
  api: {
    test: (req, res, next) => {
      console.log("controller api test");
      res.json("test api");
    },

    LoginAuth: async (req, res, next) => {
      let result = await LoginChk.public_string_AccountCheck(req.body.id, req.body.pw);
      console.log("finally result : ", result);
      // if(results[0]==1) return jwt.createToken;
      return res.json(result);
    },

  }
}
