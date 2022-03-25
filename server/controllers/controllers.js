const testModel = require("../models/models");

module.exports = {
  eApi: {
    getTest: async (req, res) => {
      let result = await testModel.getRead();
      console.log(result);
    },
  },

  wApi: {
    getTest: async (req, res) => {
        let result = await testModel.getSelected();
        console.log(result);
      },
  },

  wiApi: { //db에 insert 
    getInsert: async (req, res) => {
        let result = await testModel.getInserted();
        console.log(result);
      },
  },
  wsApi: { //웹에 db 띄우기
    getShow: async (req, res) => {
        let result = await testModel.getSelected();
        res.send(result);
        console.log("db 웹에 띄우기")
      },
  },

  wdApi: { //db에 delete
    getDelete: async (req, res) => {
        let result = await testModel.getDeleted();
        console.log(result);
      },
  },

  uApi: {
    getTest: (req, res) => console.log("/user url test Ok"),
  },
};
