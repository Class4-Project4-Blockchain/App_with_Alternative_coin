const express = require('express');
const router = express.Router(); // 라우터
const ctrl = require('../controllers/controllers'); // 컨트롤러 모듈

router.get('/', ctrl.uApi.getTest); 
// server.js app.use의 '/users'

module.exports = router;
