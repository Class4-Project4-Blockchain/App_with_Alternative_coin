const testModel = require("../models/models");
const con = require("../util/db");

module.exports = {
  eApi: {
    getTest: async (req, res) => {
      let result = await testModel.getRead();
      console.log(result);
    },
  },

  wApi: {
    getTest: (req, res) => console.log("/mywallet url test ok"),
  },

  uApi: {
    getTest: (req, res) => console.log("/user url test Ok"),
  },
};
