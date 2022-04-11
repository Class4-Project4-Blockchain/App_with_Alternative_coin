import React from "react";
import styled from "styled-components";

const BrowserBlock = styled.div`
  .boyulist {
    padding: 0.5em 1.5em;
    display: flex;
    justify-content: space-between;

    &:hover {
      background: lightgrey;
    }
  }
  .boyurow {
    display:flex;
    justify-content:space-between;
  }
  .boyutitle {
    font-size: 16px;
    margin: 2% 0;
    padding: 0 5%;
  }
  .boyuclassify {
      padding: 0 5em;
      font-size:13px;
  }
  .boyulist span {
    font-size: 15px;
    padding: 0 4em;
  }
`;
const NonBrowserBlock = styled.div`
  .boyulist {
    padding: 0.5em 1.5em;
    display: flex;
    justify-content: space-between;

    &:hover {
      background: lightgrey;
    }
  }
`;

export default function OwnCoinlist() {
  /* getData */
  //personal
  let amounts = [
    { idx: 1, title: "BTC", rate:2, val: "123" },
    { idx: 2, title: "ETH", rate:2, val: "123" },
    { idx: 3, title: "ALT", rate:1, val: "123" },
    { idx: 4, title: "BONO", rate:40, val: "123" },
    { idx: 5, title: "...", rate:0, val: "123" }
  ];

  if (window.innerWidth < 800) {
    return (
      <>
        <NonBrowserBlock>
          <hr/>
          <div className="boyutitle">보유코인목록</div>
          <hr/>
          
          {amounts.map((i) => {
            return (
              <div className="boyulist">
                <span>{i.title}</span>
                <span>{i.val}</span>
              </div>
            );
          })}
        </NonBrowserBlock>
      </>
    );
  }
  return (
    <>
      <BrowserBlock>
        <div className="boyutitle">
          <hr/>
            보유코인목록
          <hr/>
        </div>
        <div className="boyurow">
          <div className="boyuclassify">코인명</div>
          <div className="boyuclassify">보유비중</div>
          <div className="boyuclassify">보유수량(평가금액)</div>
        </div>
        {amounts.map((i) => {
          return (
            <div className="boyulist">
              <span>{i.title}</span>
              <span>{i.rate}%</span>
              <span>{i.val}</span>
            </div>
          );
        })}
      </BrowserBlock>
    </>
  );
}
