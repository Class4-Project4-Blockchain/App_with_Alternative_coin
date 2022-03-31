import { useState } from 'react';

function Websocket(){

    const [coinData, setCoinData] = useState();

    const socket = new WebSocket("wss://api.upbit.com/websocket/v1");

    socket.onopen = function(e) {
        socket.binaryType = 'arraybuffer';
        console.log("[open] 커넥션이 만들어졌습니다.");
        socket.send(JSON.stringify([
            {"ticket":"June"},
            {"type":"ticker","codes":["KRW-BTC"]},
        ]));
      };

    socket.onmessage = function(event) {
        // console.log(event.data);

        const utf8 = new TextDecoder("utf-8");
        const unit8 = new Uint8Array(event.data);
        const coinDataToJSON = JSON.parse(utf8.decode(unit8));

        // setCoinData(coinDataToJSON.trade_price);

        console.log("coinData = " , coinDataToJSON.trade_price);
        // console.log("coinData = " , coinDataToJSON);
        // console.log("coinData = " , JSON.parse(coinData).trade_price);
        // console.log("coinData = " , coinData.code);
        // console.log(enc.decode(arr).trade_price);
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[close] 커넥션이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`);
        } else {
          // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
          // event.code가 1006이 됩니다.
          console.log('[close] 커넥션이 죽었습니다.');
        }
      };
      
    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };


    return(        
        <>
            <h1>Websocket Test</h1>

            <h1>{coinData}</h1>

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
    