import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from "styled-components";


const ChartBack = styled.div`
    width: 1184px;
    /* height: 400px; */
    /* margin: auto; */
    float: left;
    border: 1px solid #80c7f2;
`;

// 양봉 - 저가. 시가. 종가. 고가
// 음봉 - 고가. 시가. 종가. 저가
function TradeChart(props) {
    
    const [currentCoinChart, setCurrentCoinChart] = useState("BTC");

    useEffect(()=>{
      setCurrentCoinChart(props.coinName);
      console.log("리스트에서 선택한 프랍스 = ", props.coinName);
    },[props.coinName])


  // 차트에 불러온 데이터 개수가 기본 더미 개수를 
  // 넘어서거나 적은 경우 리로딩 되는것처럼 보이는 화면때문에
  // 추후 불러올 데이터 개수와 맞출 필요가 있다.
  const [tradeInfo, setTradeInfo] = useState([
    ["0", "", "", "", ""],
    ["1", 0, 0, 0, 0],
    ["2", 0, 0, 0, 0],
    ["3", 0, 0, 0, 0],
    ["4", 0, 0, 0, 0],
    ["5", 0, 0, 0, 0],
]);
  
  let newtradeInfo = [
    ["0", "", "", "", ""],
    ["1", 0, 0, 0, 0],
    ["2", 0, 0, 0, 0],
    ["3", 0, 0, 0, 0],
    ["4", 0, 0, 0, 0],
    ["5", 0, 0, 0, 0],
    ];
  let arrTade = [];
  let parentCoinChoose;//
  // const [testName, setTestName] =useState();
  
  useEffect(async () => {
        // markets=KRW-BTC markets=KRW-ETH markets=KRW-BCH
        // markets=KRW-LTC markets=KRW-ETC markets=KRW-EOS
        // markets=KRW-XRP markets=KRW-DOGE 
        // markets=KRW-BTG 보노코인 대응

        if(currentCoinChart === "BONO" )
        {
          parentCoinChoose = "BTG";
        }
        else
        {
          parentCoinChoose = currentCoinChart;
        }
        

      await Axios.get(`https://api.upbit.com/v1/candles/days?market=KRW-${parentCoinChoose}&count=80`)
      .then((res) => {
        newtradeInfo = [["Day", "", "", "", ""]];
        for(let i = res.data.length-1; i >= 0; i--)
        {
          if(res.data[i].opening_price < res.data[i].trade_price)
          {
            // 양봉 - 저가. 시가. 종가. 고가
            arrTade = [
              res.data[i].candle_date_time_kst.substring(0, 10), 
              res.data[i].low_price,
              res.data[i].opening_price, 
              res.data[i].trade_price,
              res.data[i].high_price
            ]
          }
          else
          {
            // 음봉 - 고가. 시가. 종가. 저가
            arrTade = [
              res.data[i].candle_date_time_kst.substring(0, 10), 
              res.data[i].high_price,
              res.data[i].opening_price, 
              res.data[i].trade_price,
              res.data[i].low_price
            ]
          }
          newtradeInfo.push(arrTade);
          arrTade = [];
        }
        setTradeInfo(newtradeInfo);
      });
  },[currentCoinChart]);

  const options = {
    title: {currentCoinChart},
    // title: "BitCoin",
    legend: "none",
    bar: { groupWidth: "80%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" },
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }
    }
  };

// 조건문을 붙여 초기 빈 데이터 상황 시
// column 이 부족해 오류 메시지가 뜨는 상황을 막음.
    if(tradeInfo)
    {
        return (
            <>
                <ChartBack>
                    <Chart
                    chartType="CandlestickChart"
                    width="100%"
                    height="400px"
                    data={tradeInfo}
                    options={options}
                    />
                </ChartBack>
            </>
        );
    }
}

export default TradeChart;