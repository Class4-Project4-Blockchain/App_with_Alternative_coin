const LoginChk = require("./LoginImplement");
// console.log("Linked Loign Controller")

module.exports = {
  needs: () => upload,
  api: {
    test: (req, res, next) => {
      console.log("controller api test");
      res.json("test api");
    },

    LoginAuth: async (req, res, next) => {
    
      console.log("Login controller :", req.body.id, req.body.pw);
      let result = await LoginChk.public_string_AccountCheck(req.body.id, req.body.pw);
      console.log("inputs", req.body.id, req.body.pw);
      console.log("finally result : ", result);
      return res.json(result);
    },

  }
}
