import React from "react";
import styled from "styled-components";

import Button from "../../../components/atoms/Button";

const BrowserBlock = styled.div`
//
border:dotted 0.8px red;

.wallet-title{
    font-size:16px;
    text-align:center;
}
 width: 30%;
 display:flex;
 flex-direction:column;
 
 font-size:12px;
 
 .wallet.title{
     text-align:center;
     font-size:13px;
     margin:5px;
 }
`;

export default function Wallets(){
    return <>
    <BrowserBlock>
    <div className="wallet-title">나의지갑</div>
        <div className="dividebox">
        <label className="wallet title">지갑 생성하기</label><br/>
            <label>지갑이름 입력</label><br/>
            <input></input>
            <Button>생성</Button>
           <input></input>
        </div>
        <div className="dividebox">
        <label className="wallet title">지갑조회</label><br/>
            <label>지갑이름 입력</label><br/>
            <input></input>
            <Button>조회</Button>
            <input></input>
        </div>
        <div className="dividebox">
        <label className="wallet title">코인송금</label>
        <br/>
        <label>지갑주소</label><br/>
            <input></input><br/>
        <label>갯수 입력</label><br/>
            <input></input>
            <Button>송금</Button>
        </div>
        <div className="dividebox">
        <label className="wallet title">송금내역조회</label>
            <label>트랜잭션 입력</label>
            <input></input>
            <input></input>
            <Button>조회</Button>
        </div>
    </BrowserBlock>
    </>
}