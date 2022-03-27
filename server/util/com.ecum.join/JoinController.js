const addAccount = require("./JoinImplement");
module.exports = {
    needs: ()=>upload,
  api:{
    test:()=>{ console.log("test"); },
    AddAccount: (req,res, next) => {
      
      let id = req.body.id;
      let pwd = req.body.pw;
      let email = req.body.email;
      console.log("c", req.body.id, req.body.pw, req.body.email);
      let result = addAccount.public_string_AddAccount(id, pwd, email );
      res.json({results: result})
    },
  }
}
