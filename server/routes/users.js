const express = require('express');
const router = express.Router(); // 라우터
const Loginctrl = require('../controllers/Login.js'); // 컨트롤러 모듈
const Joinctrl = require('../controllers/Join.js'); // 컨트롤러 모듈
setTimeout(()=>{console.log("Linked Users Routes")}, 1000);

// const auth = require("../util/com.ecum.auth/jwt-verify.js");
// router.get("/authchk", auth );


router.get('/', (req, res)=>{ console.log("requested /users"); res.send("requested /users");});//ctrl.uApi.getTest); 
router.post("/login", Loginctrl.api.LoginAuth);
router.post("/join", Joinctrl.api.AddAccount);
// server.js app.use의 '/users'

module.exports = router;
