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
    getTest: async (req, res) => {
        let result = await testModel.getInserted();
        console.log(result);
      },
  },

//   wdApi: { //db에 delete
//     getTest: async (req, res) => {
//         let result = await testModel.getDeleted();
//         console.log(result);
//       },
//   },

  uApi: {
    getTest: (req, res) => console.log("/user url test Ok"),
  },
};
