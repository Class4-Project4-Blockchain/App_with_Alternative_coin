
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
                con.query(sql, (err, result, fields) => resolve(result));
                con.release();
            
            } catch (err) { // 실패
                console.error(err);
            };
        });
    });
};

// exports.getShow = () => {
//     return new Promise((resolve, reject) => {
//         getConn((con) => {
//             try { // 성공
//                 let sql = 'SELECT * FROM testex';
//                 con.query(sql, (err, result, fields) => resolve(result));
//                 response.send(result);
//                 con.release();
            
//             } catch (err) { // 실패
//                 console.error(err);
//             };
//         });
//     });
// };



exports.getInserted = () =>{
    return new Promise((resolve, reject) => {
        getConn((con) => {
            try { // 성공
                let sql = 'INSERT INTO testex (name, pwd) values("wonhyeon", "555")';

                con.query(sql, (err, result, fields) => resolve(result));
                con.release();
                console.log(result);
            } catch (err) { // 실패
                console.error(err);
            };
        });
    });
};


exports.getDeleted = () =>{
    return new Promise((resolve, reject) => {
        getConn((con) => {
            try { // 성공
                let sql = 'DELETE FROM testex where name = "wonhyeon"';
                con.query(sql, (err, result, fields) => resolve(result));
                con.release();
                console.log(result);
            } catch (err) { // 실패
                console.error(err);
            };
        });
    });
};