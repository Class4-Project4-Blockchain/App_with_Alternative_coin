import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Template from "./common/Template";
import Items from "./common/Items";
import OwnCoinList from "./owncoinlist/Lists";

export default function Pages() {
  if (window.innerWidth < 800) {
    return (
      <>
        <Template>
          <Items>
            <OwnCoinList></OwnCoinList>
          </Items>
        </Template>
      </>
    );
  }
  return (
    <>
      <Template>
        <Items>
          <OwnCoinList></OwnCoinList>
        </Items>
      </Template>
    </>
  );
}
