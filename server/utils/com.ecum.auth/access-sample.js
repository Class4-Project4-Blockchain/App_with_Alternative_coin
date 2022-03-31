const express = require('express');
const router = express.Router();
const pageController = require('./controllers/pagecontrollers');
const { verifyToken } = require('./middlewares/authorization');

router.get('/jwt-test', verifyToken, pageController.pageRender);

module.exports = router;


