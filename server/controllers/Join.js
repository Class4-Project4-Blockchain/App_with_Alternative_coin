const addAccount = require("./JoinImplement");
module.exports = {
    needs: ()=>upload,
  api:{
    test:()=>{ console.log("test"); },

    AddAccount: async (req,res, next) => {
      let id = req.body.id;
      let pwd = req.body.pw;
      let pwd2 = req.body.pw2;
      let email = req.body.email;
      console.log("join -> c", req.body.id, req.body.pw, req.body.pw2, req.body.email);
      try{

        let result = await addAccount.public_string_AddAccount(id, pwd, pwd2, email );
        if(result == "response:success") return res.json({id:req.body.id})
        
          console.log("join controller result :", result);
          console.log("result.response" , result.response)      
        
        return res.json({results: result})
      }catch(err){
        console.error(err);
      }
    },
  }
}
