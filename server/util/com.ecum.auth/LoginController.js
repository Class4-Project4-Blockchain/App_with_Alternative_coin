//const express = require("express");
const LoginChk = require("./LoginImplement");
// console.log("Linked Loign Controller")

module.exports = {
    needs: ()=>upload,
api:{
    test:(req, res, next)=>{
      console.log("controller api test");      
      res.json("test api");
    },

	LoginAuth:  async (req, res, next)=>{
		console.log("authController next");
        console.log("id :", req.body.id);
        console.log("pw :", req.body.pw);
        let result = await LoginChk.protect_string_AccountCheck(req.body.id, req.body.pw);
        console.log("finally result : ", result);
        return res.json(result);
        
	},
	
    jwt:(req, res, next)=>{
		console.log("jwt test");
	},
    RefreshToken:(req, res, next)=>{
		console.log("refresh token test");
	},
}
}
