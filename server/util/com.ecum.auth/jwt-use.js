// const User = require('../../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = "PROJECT4";//process.env.SECRET_KEY;
let option = {
    algorithm : "HS256", // 해싱 알고리즘
    expiresIn : "25m",  // 토큰 유효 기간
}

exports.generateAccessToken = async (user) => {
        /* 현재는 idx와 email을 payload로 넣었지만 필요한 값을 넣으면 됨! */
        const payload = {
            user: user
        };
        const result = {
            //sign메소드를 통해 access token 발급!
            token: jwt.sign(payload, SECRET_KEY, option),
        };
        return result;
    },
exports.verify = async (token) => {
        let decoded;
        try {
            // verify를 통해 값 decode!
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log("invalid token");
                return TOKEN_INVALID;
            }
        }
        return decoded;
    }
exports.generateRefreshToken  = (id)=>{ //리프레시토큰으로 Access토큰 재발행(나중)
        // return jwt.sign({user:id}, SECRET_KEY, {expiresIn:"25m"})
        let refreshToken = req.cookie.refreshToken;
        if (!refreshToken) return res.sendStatus(401);

        this.verify(
            refreshToken,
            SECRET_KEY,
            (error, user) => {
                if (error) return res.sendStatus(403);

                const accessToken = generateAccessToken(id);

                return { accessToken };
            }
        );
    }


// exports.authUtil = {
//     checkToken: async (req, res, next) => {
//         var token = req.headers.token;
//         // 토큰 없음
//         if (!token)
//             return res.json(util.fail(CODE.BAD_REQUEST, MSG.EMPTY_TOKEN));
//         // decode
//         const user = await jwt.verify(token);
//         // 유효기간 만료
//         if (user === TOKEN_EXPIRED)
//             return res.json(util.fail(CODE.UNAUTHORIZED, MSG.EXPIRED_TOKEN));
//         // 유효하지 않는 토큰
//         if (user === TOKEN_INVALID)
//             return res.json(util.fail(CODE.UNAUTHORIZED, MSG.INVALID_TOKEN));
//         if (user.idx === undefined)
//             return res.json(util.fail(CODE.UNAUTHORIZED, MSG.INVALID_TOKEN));
//         req.idx = user.idx;
//         next();
//     }
// }

