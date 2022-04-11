import React from "react";
import styled from "styled-components";

import Menus from "../Menus";
import Assets from "./Assets";
import Wallets from "./Wallets";
import Lists from "./Lists";

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
    margin: 0.5em 0.5em;
    font-weight: bold;
  }
  .contentsBoxes {
    display: flex;
  }
  .leftbox {
    width: 100%;
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
  if (window.innerWidth < 800) {
    return (
      <>
        <NonBroserBlock>
          <Menus />
          <div className="ContentsBox">
          <Assets />
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
          <div >
          <Assets />
          <Lists />
          </div>

          <Wallets />
        </div>
        {children}
      </BroserBlock>
    </>
  );
}
