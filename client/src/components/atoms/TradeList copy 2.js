import Axios from 'axios';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import TradeChart from './TradeChart';

const TradeList = () => {

    let obj = {};
    let newObj = [];
    const [objCoin, setObjCoin] = useState();
    const [coinState, setCoinState] = useState("BTC");

    const [coinDataBTC, setCoinDataBTC] = useState(0);
    const [coinDataETH, setCoinDataETH] = useState();

    // let arrCoinDataToJSON = [];

    let coinDataType;
    let coinDataBTCToJSON;
    let coinDataETHToJSON = 0;

    let price_BTC;
    let price_ETH;
    
    const socket = new WebSocket("wss://api.upbit.com/websocket/v1");

    socket.onopen = (e) => {
        socket.binaryType = 'arraybuffer';
        console.log("연결 시작");

        socket.send(JSON.stringify([
            {"ticket":"June"},
            {"type":"ticker","codes":["KRW-BTC"]},
            {"type":"ticker","codes":["KRW-ETH"]},
            // {"type":"ticker","codes":["KRW-BCH"]},
            // {"type":"ticker","codes":["KRW-LTC"]},
            // {"type":"ticker","codes":["KRW-ETC"]},
            // {"type":"ticker","codes":["KRW-EOS"]},
            // {"type":"ticker","codes":["KRW-XRP"]},
            // {"type":"ticker","codes":["KRW-DOGE"]},
            // {"type":"ticker","codes":["KRW-BTG"]},
        ]));
    };
      
    socket.onmessage = (event) => {
        // console.log(event.data);

        let utf8 = new TextDecoder("utf-8");
        let unit8 = new Uint8Array(event.data);
        // arrcoinDataBTCToJSON.push(JSON.parse(utf8.decode(unit8)));
        coinDataType = JSON.parse(utf8.decode(unit8));
        // console.log("coinDataType = " , coinDataType);

        switch(coinDataType.code)
        {
            case "KRW-BTC":
                price_BTC = coinDataType.trade_price;
                // console.log("비트코인 확인");
                break;
            case "KRW-ETH":
                price_ETH = coinDataType.trade_price;
                // console.log("이더리움 확인");
                break;
        }
    };
    
    socket.onclose = function(event) {
        console.log("event.code" , event.code);
        setTimeout(socket.onopen, 300);
      };
      
    socket.onerror = function(error) {
        console.log("error = " , error.message);
    };


  useEffect(() => {
    const interval = setInterval(() => {
        if(coinDataBTC !== price_BTC)
        {
            setCoinDataBTC(price_BTC);
        }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [coinDataBTC]);

    return (
        <>
            <TradeChart coinName={coinState} />

            {/* <h1>Websocket Test</h1>
            <h1>BitCoin {coinDataBTC}</h1> */}

            <ListBack>
                <CoinNavBox>
                    <CoinNavImg />
                    <CoinNavTextBox>
                        <CoinNavName>코인 이름</CoinNavName>
                        <CoinNavChange>전일 대비</CoinNavChange>
                        <CoinNavCurrentPrice>현재가격</CoinNavCurrentPrice>
                    </CoinNavTextBox>
                </CoinNavBox>

                <CoinElementBox>
                <CoinImageBox src={require(`../../assets/img/BTC.png`)} />
                        <CoinTextBox>
                            <CoinTextName>BTC</CoinTextName>
                            <CoinChange>
                                <CoinChangeRate></CoinChangeRate>
                                <CoinChangePrice></CoinChangePrice>
                            </CoinChange>
                            <CoinTextPrice>{coinDataBTC}</CoinTextPrice>
                        </CoinTextBox>
                </CoinElementBox>
                {/* <CoinElementBox>
                <CoinImageBox src={require(`../../assets/img/ETH.png`)} />
                        <CoinTextBox>
                            <CoinTextName>ETH</CoinTextName>
                            <CoinChange>
                                <CoinChangeRate></CoinChangeRate>
                                <CoinChangePrice></CoinChangePrice>
                            </CoinChange>
                            <CoinTextPrice>{coinDataETH}</CoinTextPrice>
                        </CoinTextBox>
                </CoinElementBox> */}

                {/* {objCoin && objCoin.map((coin, index) => (
                    <CoinElementBox key={index} onClick={event=>{
                        setCoinState(coin.name);
                        event.preventDefault();
                        // console.log(index, coin.name);
                      }}>
                        <CoinImageBox src={require(`../../assets/img/${coin.name}.png`)} />
                            <CoinTextBox>
                                <CoinTextName>
                                    {coin.name}
                                </CoinTextName>
                                <CoinChange>
                                    <CoinChangeRate style={0 < coin.changePrice ? {color : 'red'} : {color : 'blue'}}>
                                        {coin.changeRate}
                                    </CoinChangeRate>
                                    <CoinChangePrice style={0 < coin.changePrice ? {color : 'red'} : {color : 'blue'}}>
                                        {coin.changePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </CoinChangePrice>
                                </CoinChange>
                                <CoinTextPrice>
                                    {coin.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </CoinTextPrice>
                            </CoinTextBox>
                    </CoinElementBox>
                ))} */}
                
            </ListBack>
            
        </>
    );
}

export default TradeList;

// Coin 리스트 박스 컨테이너
const ListBack = styled.div`
    width: 299px;
    /* height: 1500px; */
    /* margin: auto; */
    /* background-color: green; */
    float: left;
    margin-left: 15px;
`;

// 코인 이름.가격 분류
const CoinNavBox = styled.div`
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid #80c7f2;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`;
const CoinNavImg = styled.div`
    width: 20%;
    height: 100%;
    /* background-color: yellow; */
    float: left;
    margin-left: 5%;
`;
const CoinNavTextBox = styled.div`
    width: 80%;
    height: 100%;
    float: left;
`;
const CoinNavName = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: blue; */
    float: left;
    line-height: 30px;
    text-align: right;
    font-size: 80%;
    /* margin-right: 5%; */
`;
const CoinNavChange = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: blue; */
    float: left;
    line-height: 30px;
    text-align: right;
    font-size: 80%;
    /* margin-right: 5%; */
`;
const CoinNavCurrentPrice = styled.div`
    width: 35%;
    height: 100%;
    /* background-color: orange; */
    float: left;
    line-height: 30px;
    text-align: right;
    font-size: 80%;
    /* margin-right: 1%; */
`;

// 코인 종류 엘레먼트
const CoinElementBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    border: 1px solid #80c7f2;
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    cursor:pointer;
`;
const CoinImageBox = styled.img`
    width: 20%;
    height: 60px;
    /* background-color: yellow; */
    float: left;
    margin-left: 5%;
`;
const CoinTextBox = styled.div`
    width: 80%;
    height: 60px;
    /* background-color: green; */
    float: left;
`;
const CoinTextName = styled.div`
    width: 30%; 
    height: 60px;
    /* background-color: blue; */
    float: left;
    line-height: 60px;
    text-align: right;
    font-size: 85%;
    /* margin-right: 5%; */
`;
const CoinChange = styled.div`
    width: 30%; 
    height: 60px;
    /* background-color: red; */
    float: left;
    line-height: 60px;
    text-align: right;
    /* margin-right: 5%; */
`;
const CoinChangeRate = styled.div`
    width: 100%; 
    height: 30px;
    /* background-color: aqua; */
    /* float: left; */
    line-height: 30px;
    text-align: right;
    font-size: 85%;
    /* margin-right: 5%; */
`;
const CoinChangePrice = styled.div`
    width: 100%; 
    height: 30px;
    /* background-color: floralwhite; */
    /* float: left; */
    line-height: 30px;
    text-align: right;
    font-size: 85%;
    /* margin-right: 5%; */
`;
const CoinTextPrice = styled.div`
    width: 37%;
    height: 60px;
    /* background-color: orange; */
    float: left;
    line-height: 60px;
    text-align: right;
    font-size: 85%;
    /* margin-right: 1%; */
`;



