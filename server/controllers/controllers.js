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
        getTest: (req, res) => {
            let result = testModel.getSelected();
            res.json(result);
            console.log('test ok!');
            console.log(result);
        }
    },

    uApi: {
        getTest: (req, res) => console.log("/user url test Ok")
    }  

};
