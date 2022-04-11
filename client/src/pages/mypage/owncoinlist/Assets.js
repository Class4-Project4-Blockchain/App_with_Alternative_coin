import React from "react";
import styled from "styled-components";

const BrowserBlcok = styled.div`
  padding:0 3%;
  list-style: none;
  width: 70%;

  ul {
    list-style: none;
    // display: flex;
    // flex-wrap: wrap;
  }
  .allAmount{
    box-shadow:1px 1px 1px 1px;
    padding: 2%;
    border-radius:2px;
  }
  .totalAssets {
    display: flex;
    justify-content:space-around;
    white-space: nowrap;
    margin: 3% 0;
  }

  .calAssets {
    font-size: 0.8em;
    text-align: left;
    display: flex;
    justify-content:space-between;
    // margin: 2em 0;  
    // padding: 0 5%;
    // white-space: nowrap;  
  }
  // .calAssets li{
  //   border:dotted 0.5px;
  // }
`;
const NonBrowserBlcok = styled.div`
  list-style: none;
  width: 70%;
  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    /* padding: 0.5rem; */
    /* white-space: nowrap; */
    float: left;
  }

  .totalAssets {
    display: flex;
    white-space: nowrap;
  }
  .calAssets {
    font-size: 13px;
    text-align: left;
    display: inline-flex;
    
  }
`;
export default function Assets() {
  if (window.innerWidth < 800) {
    return (
      <>
        <NonBrowserBlcok>
          {/* <div className="allAmount"> */}
          
          <ul className="totalAssets">
            <div> 보유 KRW {1} KRW</div>
            <div>총 보유자산  {1} KRW </div>
          </ul>
          <hr/>
          <ul className="calAssets">
            <li>총매수금액 : {1} KRW</li>
            <li>총평가손익 : {1} KRW</li>
            <li>총평가금액 : {1} KRW</li>
            <li>총평가수익률 : {1} % </li>
          </ul>
        </NonBrowserBlcok>
      </>
    );
  }
  return (
    <>
      <BrowserBlcok>
        <div className="allAmount">
        <ul className="totalAssets">
          <div>보유 KRW {1} KRW</div>
          <div>총 보유자산  {1} KRW </div>
        </ul>
        <hr/>
        
        <ul className="calAssets">
          <div>총매수금액 : {1} KRW</div>
          <div>총평가손익 : {1} KRW</div>
          <div>총평가금액 : {1} KRW</div>
          <div>총평가수익률 : {1} % </div>
        </ul>
        </div>
      </BrowserBlcok>
    </>
  );
}
