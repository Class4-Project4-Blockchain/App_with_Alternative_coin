// Read - 참고용
modelExports.contents_Article_List = () => {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM article;";
      con.getConnection((err, connection) => {
        try {
          if (err) throw err;
          console.log("Connect Success");
  
          connection.query(sql, (err, result, fields) => {
            if (err) {
              console.log("Error: ", err);
            } else {
              if (result.length === 0) {
                console.error("DB response NOT Found");
              } else {
                resolve(result);
                console.log("READ Article List Success");
              }
            }
          });
          connection.release();
        } catch (err) {
          console.error("pool Error: Article_List", err);
        }
      });
    });
  };