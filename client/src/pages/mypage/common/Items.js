import React from "react";
import styled from "styled-components";

import Menus from "../Menus";
import Contents from "../invest/Contents";

const BroserBlock = styled.div`
  width: 100%;
  height: 45em;
  margin: 1% 0;
  background: white;
  box-shadow: 5px 2px 5px;
  border-radius: 3px;

  span {
    font-size: 14px;
    font-weight: bold;
    margin: 0.5rem 0 0.5rem 0.5rem;
    /* padding: 0.5rem; */
    float: left;
  }
  div {
    border: dotted 0.5px coral;
    margin: 0.5em 0.5em;
    font-weight: bold;
  }
  .contentsBoxes {
    display: flex;
  }
  .leftbox {
    width: 70%;
    height: 10em;
    color: lightgray;
  }
  .rightbox {
    width: 30%;
    height: 10em;
    color: lightgray;
  }
  .lists {
    height: 10rem;
  }
  .ContentsBox {
    display: flex;
  }
  .balanceGraph {
    width: 30%;
  }
  .boyutitle {
    font-size: 2.5em;
  }
`;
const NonBroserBlock = styled.div`
  width: 100%;
  height: 45em;
  margin: 1% 0;
  background: white;
  box-shadow: 5px 2px 5px;
  border-radius: 3px;

  span {
    font-size: 14px;
    font-weight: bold;
    margin: 0.5rem 0 0.5rem 0.5rem;
    /* padding: 0.5rem; */
    float: left;
  }
  div {
    border: dotted 0.5px coral;
    margin: 0.5em 0.5em;
    font-weight: bold;
  }
  .contentsBoxes {
    display: flex;
  }
  .leftbox {
    width: 70%;
    height: 10em;
    color: lightgray;
  }
  .rightbox {
    width: 30%;
    height: 10em;
    color: lightgray;
  }
  .lists {
    height: 10rem;
  }
  .ContentsBox {
    display: flex;
  }
  .balanceGraph {
    width: 30%;
  }
  .boyutitle {
    font-size: 1.3em;
  }
`;

export default function Items({ children }) {
  let data = [
    { idx: 1, title: "BTC", memo: "" },
    { idx: 2, title: "ETH", memo: "" },
    { idx: 3, title: "LTC", memo: "" }
  ];

  if (window.innerWidth < 800) {
    return (
      <>
        <NonBroserBlock>
          <Menus />
          <div className="ContentsBox">
            <Contents />
          </div>
          {children}
        </NonBroserBlock>
      </>
    );
  }
  return (
    <>
      <BroserBlock>
        <Menus />
        <div className="ContentsBox">
          <Contents />
          <div className="balanceGraph"></div>
        </div>
        {children}
      </BroserBlock>
    </>
  );
}
