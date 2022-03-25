import React from 'react';
import styled from "styled-components";
import Button from './element/Button';

const HomeTestBack = styled.div`
    width: 1500px;
    height: 400px;
    margin: auto;
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

function Wallet(){

    return(        
        <>
        <BetweenNavAndBody />
            <HomeTestBack>
                <BonoColorExam_1 />
                <BetweenVertical />
                <BonoColorExam_2 />
                <BetweenVertical />
                <BonoColorExam_3 />
                <BetweenVertical />
                <BonoColorExam_4 />
                <BetweenVertical />
                <BonoColorExam_5 />
            </HomeTestBack>
  
            <ButtonContainer>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="sm" color="type1">
                        지갑
                    </Button>
                </div>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="sm" color="type2">
                    지갑
                    </Button>
                </div>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="md" color="type1">
                    지갑
                    </Button>
                </div>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="md" color="type2">
                    지갑
                    </Button>
                </div>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="lg" color="type1">
                    지갑
                    </Button>
                </div>
                <div style={{marginLeft:"15px", float:"left"}}>
                    <Button size="lg" color="type2">
                    지갑
                    </Button>
                </div>
            </ButtonContainer>
        </>
    );
  }
  
  export default Wallet;