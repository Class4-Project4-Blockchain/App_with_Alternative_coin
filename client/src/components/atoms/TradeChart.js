import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from "styled-components";
import Button from './Button';

// 양봉 - 저가. 시가. 종가. 고가
// 음봉 - 고가. 시가. 종가. 저가
function TradeChart(props) {
    
    const [currentCoinChart, setCurrentCoinChart] = useState("BTC");
    const [currentCoinPrice, setCurrentCoinPrice] = useState(0);

    useEffect(()=>{
      setCurrentCoinChart(props.coinName);
      setCurrentCoinPrice(props.coinPrice);
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
    // title: {currentCoinChart},
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
            <ChartContainer>
              <ChartInfo>
                <ChartCurrentName>{currentCoinChart}</ChartCurrentName>
              </ChartInfo>
              

                <ChartBack>
                    <Chart
                    chartType="CandlestickChart"
                    width="100%"
                    height="400px"
                    data={tradeInfo}
                    options={options}
                    />
                </ChartBack>

                
                <ChartTradeContainer>

                  <ChartTradeBuyContaimner>
                    <ChartTradeBuyText>매수</ChartTradeBuyText>
                    <ChartTradeBuyPropsField>
                      <ChartTradeBuyOwnCash>
                      <ChartTradeBuyCurrPriceText>현재 가격</ChartTradeBuyCurrPriceText>
                        <ChartTradeBuyCurrPriceProps>{currentCoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</ChartTradeBuyCurrPriceProps>
                      </ChartTradeBuyOwnCash>
                      <ChartTradeBuyCurrPrice>
                      <ChartTradeBuyOwnCashText>보유 현금</ChartTradeBuyOwnCashText>
                        <ChartTradeBuyOwnProps>보유 현금 Props</ChartTradeBuyOwnProps>
                      </ChartTradeBuyCurrPrice>
                      <ChartTradeBuyVolume>
                        <ChartTradeBuyVolumeText>주문 금액</ChartTradeBuyVolumeText>
                        <ChartTradeBuyVolumeInputBox>
                         <ChartTradeBuyVolumeinput/> 원
                          </ChartTradeBuyVolumeInputBox>
                      </ChartTradeBuyVolume>
                    </ChartTradeBuyPropsField>
                    <ChartTradeBuyBtn>
                      <BtnPosition>
                        <Button size="lg" color="type1">
                            매수
                        </Button>
                      </BtnPosition>
                    </ChartTradeBuyBtn>
                  </ChartTradeBuyContaimner>

                  <ChartTradeCellContaimner>
                  <ChartTradeCellText>매도</ChartTradeCellText>
                    <ChartTradeCellPropsField>
                      <ChartTradeCellOwnCoin>
                      <ChartTradeCellCurrPriceText>현재 가격</ChartTradeCellCurrPriceText>
                        <ChartTradeCellCurrPriceProps>{currentCoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</ChartTradeCellCurrPriceProps>
                      </ChartTradeCellOwnCoin>
                      <ChartTradeCellCurrPrice>
                      <ChartTradeCellOwnCoinText>보유 코인</ChartTradeCellOwnCoinText>
                        <ChartTradeCellOwnProps>보유 코인 Props</ChartTradeCellOwnProps>
                      </ChartTradeCellCurrPrice>
                      <ChartTradeCellVolume>
                        <ChartTradeCellVolumeText>매도 수량</ChartTradeCellVolumeText>
                        <ChartTradeCellVolumeInputBox>
                          <ChartTradeCellVolumeInput /> 개
                        </ChartTradeCellVolumeInputBox>
                      </ChartTradeCellVolume>
                    </ChartTradeCellPropsField>
                    <ChartTradeCellBtn>
                      <BtnPosition>
                        <Button size="lg" color="type1">
                            매도
                        </Button>
                      </BtnPosition>
                    </ChartTradeCellBtn>
                  </ChartTradeCellContaimner>

                </ChartTradeContainer>
              </ChartContainer>
              

                
            </>
        );
    }
}

export default TradeChart;


const ChartContainer = styled.div`
    width: 1184px;
    float: left;
    /* border: 1px solid #80c7f2; */
`;
const ChartInfo = styled.div`
    width: 1184px;
    height: 50px;
    background-color: white;
    border-top: 1px solid #80c7f2;
    border-left: 1px solid #80c7f2;;
    border-right: 1px solid #80c7f2;;
`;
// const ChartCurrentLogo = styled.div`
//     width: 20%;
//     height: 100%;
//     background-color: yellow;
//     float: left;
//     margin-left: 10%;
// `;
const ChartCurrentName = styled.div`
    width: 15%;
    height: 50px;
    float: left;
    margin-left: 10%;
    line-height: 50px;
    font-size: 250%;
    
`;

const ChartBack = styled.div`
    width: 1184px;
    border-bottom: 1px solid #80c7f2;
    border-left: 1px solid #80c7f2;;
    border-right: 1px solid #80c7f2;;
`;

const ChartTradeContainer = styled.div`
    width: 1184px;
    height: 325px;
    /* background-color: white; */
    margin-top: 15px;
    /* border: 1px solid #80c7f2; */
`;

// --------------- buy ---------------

const ChartTradeBuyContaimner = styled.div`
  width: 40%;
  height: 325px;
  background-color: white;
  float: left;
  margin-left: 111px;
  border: 1px solid #80c7f2;
`;
const ChartTradeBuyText = styled.div`
  width: 100%;
  height: 65px;
  line-height: 65px;
  /* background-color: yellow; */
  text-align: center;
  color: red;
  font-size: 200%;
  font-weight: 700;
`;
const ChartTradeBuyPropsField = styled.div`
  width: 100%;
  height: 195px;
  /* background-color: red; */
  font-weight: 600;
`;

const ChartTradeBuyOwnCash = styled.div`
  height: 33.3%;
  /* background-color: white; */
`;
const ChartTradeBuyOwnCashText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: red; */
  line-height: 64px;
  float: left;
`;
const ChartTradeBuyOwnProps = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: pink; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;

const ChartTradeBuyCurrPrice = styled.div`
  height: 33.3%;
  /* background-color: olive; */
`;
const ChartTradeBuyCurrPriceText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: yellow; */
  line-height: 64px;
  float: left;
`;
const ChartTradeBuyCurrPriceProps = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: green; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;

const ChartTradeBuyVolume = styled.div`
  height: 33.3%;
  /* background-color: purple; */
`;
const ChartTradeBuyVolumeText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: brown; */
  line-height: 64px;
  float: left;
`;
const ChartTradeBuyVolumeInputBox = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: blue; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;
const ChartTradeBuyVolumeinput = styled.input`
  width: 120px;
`;

const ChartTradeBuyBtn = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: pink; */
  position : relative;
`;


// --------------- cell ---------------
const ChartTradeCellContaimner = styled.div`
    width: 40%;
    height: 325px;
    background-color: white;
    float: left;
    margin-left: 15px;
    border: 1px solid #80c7f2;
`;

const ChartTradeCellText = styled.div`
  width: 100%;
  height: 65px;
  line-height: 65px;
  /* background-color: yellow; */
  text-align: center;
  color: blue;
  font-size: 200%;
  font-weight: 700;
`;
const ChartTradeCellPropsField = styled.div`
  width: 100%;
  height: 195px;
  /* background-color: red; */
  font-weight: 600;
`;

const ChartTradeCellOwnCoin = styled.div`
  height: 33.3%;
  /* background-color: white; */
`;
const ChartTradeCellOwnCoinText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: red; */
  line-height: 64px;
  float: left;
`;
const ChartTradeCellOwnProps = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: pink; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;

const ChartTradeCellCurrPrice = styled.div`
  height: 33.3%;
  /* background-color: olive; */
`;
const ChartTradeCellCurrPriceText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: yellow; */
  line-height: 64px;
  float: left;
`;
const ChartTradeCellCurrPriceProps = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: green; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;

const ChartTradeCellVolume = styled.div`
  height: 33.3%;
  /* background-color: purple; */
`;
const ChartTradeCellVolumeText = styled.div`
  width: 35%;
  height: 64px;
  margin-left: 10%;
  /* background-color: brown; */
  line-height: 64px;
  float: left;
`;
const ChartTradeCellVolumeInputBox = styled.div`
  width: 35%;
  height: 64px;
  /* background-color: blue; */
  line-height: 64px;
  float: left;
  margin-left: 10%;
  text-align: right;
`;
const ChartTradeCellVolumeInput = styled.input`
  width: 150px;
`;

const ChartTradeCellBtn = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: pink; */
  position : relative;
`;

const BtnPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translate(-50%,-50%);
`;