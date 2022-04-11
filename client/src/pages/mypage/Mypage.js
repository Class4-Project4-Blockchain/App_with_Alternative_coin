import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LimitSize from "./common/PageCard";
import Template from "./common/Template";
import LayoutAsset from "./owncoinlist/Layout-Asset";
import OwnCoinList from "./owncoinlist/Lists";

export default function Pages() {
  if (window.innerWidth < 800) {
    return (
      <>
      <LimitSize>
        <Template>
          <LayoutAsset>
            <OwnCoinList></OwnCoinList>
          </LayoutAsset>
        </Template>
        </LimitSize>
      </>
    );
  }
  return (
    <>
    <LimitSize>
      <Template>
        <LayoutAsset>
        </LayoutAsset>
      </Template>
      </LimitSize>
    </>
  );
}
