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
      let id = req.body.id;
      console.log("get Login controller :", req.body.id, req.body.pw);
      let result = await LoginChk.public_string_AccountCheck(req.body.id, req.body.pw);
      // console.log("inputs", req.body.id, req.body.pw);
      console.log("finally result : ", result);

      // console.log("GetToken :", await jwt.generateAccessToken (req.body.id));
      
      if(result.token){  
        res.cookie("AccessToken", result[token])
        res.cookie("RefreshToken", jwt.generateRefreshToken)
      }
      return res.json(result)  ;
    },

  }
}
