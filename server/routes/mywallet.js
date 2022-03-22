const express = require('express');
const router = express.Router(); //라우터
const ctrl = require('../controllers/controllers'); //모듈 가져오기

router.get('/', ctrl.wApi.getTest); //어디서 모듈 가져오는지
router.get('/insert', ctrl.wiApi.getInsert);
router.get('/delete', ctrl.wdApi.getDelete);

module.exports = router;