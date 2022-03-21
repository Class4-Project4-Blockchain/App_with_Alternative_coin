const getConn = require('../util/db');

exports.getRead = () => {
    return new Promise((resolve, reject) => {
        getConn((con) => {
            try {
                let sql = `SELECT * FROM users`;
                con.query(sql, (err, result, fields) => {resolve(result)});
                con.release();
            
            } catch (err) {
                console.error(err);
            };
        });
    });
};

exports.getSelected = () => {
    return new Promise((resolve, reject) => {
        getConn((con) => {
            try { // 성공
                let sql = 'SELECT * FROM testex';
                console.log(sql);
                con.query(sql, (err, result, fields) => resolve(result));
                con.release();
            
            } catch (err) { // 실패
                console.err(err);
            };
        });
    });
};