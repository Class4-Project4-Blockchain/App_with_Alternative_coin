// const User = require('../../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

//토큰 생성
exports.createToken = async function (req, res, next) {
    try {
        const user = req.body.id;
        if (user > 0) {
            const token = jwt.sign({
                user_id: user
            }, SECRET_KEY, {
                expiresIn: '5m'
            });
            res.cookie('user', token);
            console.log('user token :',token)
            res.status(201).json({
                result: 'ok',
                token
            });
        } else {
            res.status(400).json({ error: 'invalid user' });
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.createNewUser = async function (req, res, next) {
    try {
        const user = await new User(req.body).save();
        res.status(201).json({
            result: 'ok',
            user: user
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.id;
        const decoded = jwt.verify(clientToken, SECRET_KEY);
        if (decoded) {
            res.locals.id = decoded.id;
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }
    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
};


