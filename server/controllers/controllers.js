const testModel = require("../models/models");
// const blockDao = require("../models/AccountDao");
// const addBlockDao = require("../models/addBlockDao");
const request = require("request");
require("dotenv").config({ path: __dirname + "./utils/.env" });

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASS;
const PORT = process.env.RPC_PORT;
const URL = process.env.RPC_URL;
const ID = "Bonocoin";
const headers = { "content-type": "text/plain;" };


module.exports = {

  getBlockCount: { //원현이형꺼 인포가져오기
    getblockcount: (req, res) => {
      let dataString = `{"jsonrpc":"1.0","id":"${ID}","method":"getwalletinfo","params":[]}`;
      let options = {
        url: `http://${USER}:${PASS}@${URL}:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString,
      };

      callback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body);
          // res.render("getblockcount", {
          //   getblockcount: data.result,
          // });
          res.send(data);
          console.log(data);
        } else {
          console.error("getblockcount's Error => ", error);
        }
      };

      request(options, callback);
    },
  },

  getNewAddress:{
  getnewaddress: (req, res) => {
    var account = req.body.account;
    console.log(account);
    var dataString = `{"jsonrpc":"1.0","id":"${ID}","method":"getnewaddress","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@${URL}:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
  console.log('wallet만들었어')
},
},

getAddressesbyAccount:{
  getaddressesbyaccount: (req, res) =>{
    var account = req.body.account;
    console.log(account)
    // res.send(`Account : ${account}`);
    var dataString = `{"jsonrpc":"1.0","id":"${ID}","method":"getaddressesbyaccount","params":["${account}"]}`;
  var options = {
    url: `http://${USER}:${PASS}@${URL}:${PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data);
    }
  };
  request(options, callback);
  console.log('wallet찾기완료')
  }
  },

  sendToAddress:{
    sendtoaddress: (req, res) =>{
      var address = req.body.address;
      var amount = req.body.amount;
      console.log(address);
      console.log(amount);
      // res.send(`Account : ${account}`);
      var dataString = `{"jsonrpc":"1.0","id":"${ID}","method":"sendtoaddress","params":["${address}", "${amount}"]}`;
    var options = {
      url: `http://${USER}:${PASS}@${URL}:${PORT}/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
  
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        console.log(data);
      }
    };
    request(options, callback);
    console.log('코인보내기 완료')
    }
    },

    ListTransactions:{
      listtransactions: (req, res)=>{
        var account = req.body.account;
        console.log(account)
    var dataString = `{"jsonrpc":"1.0","id":"${ID}","method":"listtransactions","params":["${account}"]}`;
    var options = {
        url: `http://${USER}:${PASS}@${URL}:${PORT}/`,
        method: "POST",
        headers: headers,
        body: dataString
    };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
      console.log(data);
    }
  };
  request(options, callback);
 }
 },

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
