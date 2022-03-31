// 원래 파일명 Websocket.js

import { useState, useEffect } from 'react';

function Websocket(){

    const [coinData, setCoinData] = useState();
    // let arrCoinDataToJSON = [];

    let coinDataToJSON = 0;

    const socket = new WebSocket("wss://api.upbit.com/websocket/v1");

    socket.onopen = function(e) {
        socket.binaryType = 'arraybuffer';
        console.log("연결 시작");
        socket.send(JSON.stringify([
            {"ticket":"June"},
            {"type":"ticker","codes":["KRW-BTC"]},
            {"type":"ticker","codes":["KRW-ETH"]},
            {"type":"ticker","codes":["KRW-BCH"]},
            {"type":"ticker","codes":["KRW-LTC"]},
            {"type":"ticker","codes":["KRW-ETC"]},
            {"type":"ticker","codes":["KRW-EOS"]},
            {"type":"ticker","codes":["KRW-XRP"]},
            {"type":"ticker","codes":["KRW-DOGE"]},
            {"type":"ticker","codes":["KRW-BTG"]},
        ]));
      };
      
    socket.onmessage = function(event) {
            // console.log(event.data);

            let utf8 = new TextDecoder("utf-8");
            let unit8 = new Uint8Array(event.data);
            // arrCoinDataToJSON.push(JSON.parse(utf8.decode(unit8)));
            coinDataToJSON = JSON.parse(utf8.decode(unit8));


            console.log("arrCoinDataToJSON = " , arrCoinDataToJSON);

            

            // setCoinData(coinDataToJSON.trade_price);

            // if(coinData !== coinDataToJSON.trade_price)
            // {
            //     console.log("coinData = " , coinDataToJSON);
            // }
            // else
            // {
            //     console.log("pass");
            // }
            

            // console.log("coinData = " , coinDataToJSON);
            // console.log("coinData = " , JSON.parse(coinData).trade_price);
            // console.log("coinData = " , coinData.code);
            // console.log(enc.decode(arr).trade_price);
        
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log("연결 종료");
        } else {
          // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
          // event.code가 1006이 됩니다.
          console.log("연결 끊김");
        }
      };
      
    socket.onerror = function(error) {
        console.log("error = " , error.message);
    };


  useEffect(() => {
    const interval = setInterval(() => {
        if(coinData != coinDataToJSON.trade_price)
        setCoinData(coinDataToJSON.trade_price);

    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [coinData]);


    return(        
        <>
            <h1>Websocket Test</h1>

            <h1>BitCoin {coinData}</h1>

        </>
    );
}

export default Websocket;



    // function onOpen(evt)
    // {
    //     writeToScreen("연결완료");

    //     var msg = [
    //         {
    //             "ticket"	: "TEST",
    //         },
    //         {
    //             "type"		: "ticker",
    //             "codes"		: ["KRW-BTC"]
    //         }
    //     ];
    