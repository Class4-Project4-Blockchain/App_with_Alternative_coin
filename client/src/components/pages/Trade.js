import React from 'react';
import styled from "styled-components";
import Button from '../atoms/Button';
import TradeChart from "../atoms/TradeChart";
import TradeList from "../atoms/TradeList";
import TestProps from "../atoms/TestProps";


const HomeBackGround = styled.div`
    width: 1500px;
    /* height: 1000px; */
    margin: auto;
    background-color: pink;
`;

const BetweenNavAndBody = styled.div`
    width: 1500px;
    height: 85px;
    margin: auto;
`;

const BetweenVertical = styled.div`
    width: 15px;
    height: 100%;
    float: left;
`;

const BonoColorExam_1 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #23518C;
    float: left;
`;
const BonoColorExam_2 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #5f94d9;
    float: left;
`;
const BonoColorExam_3 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #66a3d9;
    float: left;
`;
const BonoColorExam_4 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #80c7f2;
    float: left;
`;
const BonoColorExam_5 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #f1f0f2;
    float: left;
`;

const ButtonContainer = styled.div`
    width: 1500px;
    height: 400px;
    margin: auto;
    margin-top: 15px;
`;

function Trade(){

    return(        
        <>
        <BetweenNavAndBody />
        <HomeBackGround>
            {/* <TradeChart /> */}
            <TradeList />
        </HomeBackGround>
        </>
    );
}

export default Trade;