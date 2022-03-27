const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
require('dotenv').config();

//토큰 검증 
const verifyToken = (req, res, next) => {
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
exports.verifyToken = verifyToken;

