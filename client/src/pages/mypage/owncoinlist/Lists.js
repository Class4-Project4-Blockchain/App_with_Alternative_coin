import React from "react";
import styled from "styled-components";

const BrowserBlock = styled.div`
  .boyulist {
    padding: 0.5em 1.5em;

    border: solid 0.5px lightcoral;
    display: flex;
    justify-content: space-between;

    &:hover {
      background: lightgrey;
    }
  }
  .boyutitle {
    font-size: 1.4em;
  }
  .boyulist span {
    font-size: 1.2em;
    padding: 0 4em;
  }
`;
const NonBrowserBlock = styled.div`
  .boyulist {
    padding: 0.5em 1.5em;

    border: solid 0.5px lightcoral;
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
    { idx: 1, title: "BTC", val: "123" },
    { idx: 2, title: "ETH", val: "123" },
    { idx: 3, title: "ALT", val: "123" },
    { idx: 4, title: "BONO", val: "123" },
    { idx: 5, title: "...", val: "123" }
  ];

  if (window.innerWidth < 800) {
    return (
      <>
        <NonBrowserBlock>
          <div className="boyutitle">보유코인목록</div>
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
        <div className="boyutitle">보유코인목록</div>
        {amounts.map((i) => {
          return (
            <div className="boyulist">
              <span>{i.title}</span>
              <span>{i.val}</span>
            </div>
          );
        })}
      </BrowserBlock>
    </>
  );
}
