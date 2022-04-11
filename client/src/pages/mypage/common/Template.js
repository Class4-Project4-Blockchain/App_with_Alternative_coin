import React from "react";
import styled from "styled-components";

import InformBlock from "./Inform";
import Items from "../owncoinlist/Layout-Asset.js";

export default function ItemBox({ children }) {
  return (
    <>
      <InformBlock></InformBlock>
      {children}
    </>
  );
}
