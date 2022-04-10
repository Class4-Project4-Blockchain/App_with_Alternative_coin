import React from "react";
import styled from "styled-components";

import InformBlock from "./Inform";
import Items from "./Items.js";

export default function ItemBox({ children }) {
  return (
    <>
      <InformBlock></InformBlock>
      {children}
    </>
  );
}
