const addAccount = require("./JoinImplement");
module.exports = {
    needs: ()=>upload,
  api:{
    test:()=>{ console.log("test"); },
    AddAccount: async (req,res, next) => {
      
      let id = req.body.id;
      let pwd = req.body.pw;
      let email = req.body.email;
      console.log("c", req.body.id, req.body.pw, req.body.email);
      let result = await addAccount.public_string_AddAccount(id, pwd, email );
      console.log("j c ",result);
      return res.json({results: result})
    },
  }
}
