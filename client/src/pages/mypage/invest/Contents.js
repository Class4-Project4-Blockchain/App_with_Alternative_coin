import React from "react";
import styled from "styled-components";

const BrowserBlcok = styled.div`
  list-style: none;
  width: 70%;
  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    border: dotted 0.5px lightseagreen;
    /* padding: 0.5rem; */
    /* white-space: nowrap; */
    float: left;
  }
  li {
    font-size: 1.3em;
    margin-right: 10em;
    margin-top: 0.5em;
  }
  .totalAssets {
    display: flex;
    white-space: nowrap;
  }
  .totalAssets li span {
    display: flex;
    font-size: 1em;
  }
  .calAssets {
    font-size: 13px;
    text-align: left;
    display: inline-flex;
  }
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

    border: dotted 0.5px lightseagreen;
    /* padding: 0.5rem; */
    /* white-space: nowrap; */
    float: left;
  }
  li {
    margin-right: 10em;
    margin-top: 0.5em;
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
export default function Contents() {
  let assets = [
    {
      idx: 1,
      id: "test",
      assets: {
        보유KRW: 1234,
        "총 보유자산": 9000000,
        총매수금액: 2000000,
        총평가금액: 1234,
        총평가손익: 1200000,
        총평가수익률: 99
      }
    }
  ];
  if (window.innerWidth < 800) {
    return (
      <>
        <NonBrowserBlcok>
          {/* <div className="allAmount"> */}
          <ul className="totalAssets">
            <li>
              <span> 보유 KRW</span> <span>{1}</span> <span>KRW</span>
            </li>
            <li>
              {" "}
              <span> 총 보유자산</span> <span> {1}</span> <span> KRW</span>{" "}
            </li>
          </ul>
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
        {/* <div className="allAmount"> */}
        <ul className="totalAssets">
          <li>
            <span> 보유 KRW</span> <span>{1}</span> <span>KRW</span>
          </li>
          <li>
            {" "}
            <span> 총 보유자산</span> <span> {1}</span> <span> KRW</span>{" "}
          </li>
        </ul>
        <ul className="calAssets">
          <li>총매수금액 : {1} KRW</li>
          <li>총평가손익 : {1} KRW</li>
          <li>총평가금액 : {1} KRW</li>
          <li>총평가수익률 : {1} % </li>
        </ul>
      </BrowserBlcok>
    </>
  );
}
