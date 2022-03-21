const getConn = require('../util/db');

exports.getRead = () => {
    return new Promise((resolve, reject) => {
        getConn((con) => {
            try { // 성공
                let sql = `INSERT 키워드를 중심으로 구글링해서 한번 넣어봐`;
                con.query(sql, (err, result, fields) => resolve(result));
                con.release();
            
            } catch (err) { // 실패
                console.err(err);
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