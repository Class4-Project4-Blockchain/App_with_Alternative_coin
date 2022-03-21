const testModel = require('../models/models');

module.exports = {
    eApi: {
        getTest: (req, res) => {
            let result = testModel.getRead();
            res.json(result);
            console.log("test ok");
        },
    },
    
    wApi: {
        getTest: (req, res) => console.log("/mywallet url test ok")
    },

    uApi: {
        getTest: (req, res) => console.log("/user url test Ok")
    }  

};
