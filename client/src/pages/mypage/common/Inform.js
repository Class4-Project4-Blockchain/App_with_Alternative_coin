import React from "react";
import styled from "styled-components";

const InformBlock = styled.div`
  width: 100%;
  height: 35px;
  margin: 1% 0;
  padding: 0.25em;
  background: white;
  box-shadow: 5px 2px 5px;
  border-radius: 3px;

  span {
    font-size: 0.8em;
    font-weight: bold;
    margin: 0.5rem 0 0.5rem 0.5rem;
    /* padding: 0.5rem; */
    float: left;
  }
`;

export default function Infrom() {
  return (
    <>
      <InformBlock>
        <span>!</span>
        <a href="#">
          <span>공지 : [안내] 디지털 자산 오입금 관련 유의사항 안내</span>
        </a>
      </InformBlock>
    </>
  );
}
