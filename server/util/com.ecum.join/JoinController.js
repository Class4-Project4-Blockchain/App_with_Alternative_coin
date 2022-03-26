const addAccount = require("./JoinImplement");
module.exports = {
    needs: ()=>upload,
  api:{
    test:()=>{ console.log("test"); },
    AddAccount: (req,res, next) => {
      
      let id = req.body.id;
      let pwd = req.body.pw;
      let email = req.body.email;
      console.log(req.body.id);
      console.log(req.body.pw);
      console.log(req.body.email);
      res.json(addAccount.protect_string_AddAccount(id,pwd,email ));
    },
  }
}
