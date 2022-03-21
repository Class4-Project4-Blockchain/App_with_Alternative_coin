import React from 'react';
import styled from "styled-components";
import Bono from './assets/img/bono_1.png';

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
`;

const NavMenuBackBox = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: absolute;
    z-index: -1;
`;

const NavMenuBackColor = styled.div`
    width: 100%;
    height: 25px;
    background-color: #80c7f2;
    position: relative;
    top: 45px;
`;

const NavLogoBox = styled.img`
    /* width: 100px; */
    height: 100%;
    /* background-color: red; */
    float: left;
    margin-left: 100px;
`;

const NavMenuContainer = styled.div`
    height: 100px;
    float: right;
    color: #23518C;
`;

const NavMenuExplorer = styled.div`
    float: left;
    color: #23518C;
    font-size: 35px;
    font-weight: 700;
    margin-right: 50px;
    line-height: 80px;
`;

const NavMenuTrade = styled.div`
    height: 100%;
    float: left;
    color: #23518C;
    font-size: 35px;
    font-weight: 700;
    margin-right: 50px;
    line-height: 80px;
`;

const NavMenuMyPage = styled.div`
    height: 100%;
    float: left;
    color: #23518C;
    font-size: 35px;
    font-weight: 700;
    margin-right: 50px;
    line-height: 80px;
`;

const NavMenuSignIn = styled.div`
    height: 100%;
    float: left;
    color: #23518C;
    font-size: 35px;
    font-weight: 700;
    margin-right: 100px;
    line-height: 80px;
`;

function Header () {

    return (
        <>
            <NavContainer>
                <NavMenuBackBox>
                    <NavMenuBackColor />
                </NavMenuBackBox>
                    <NavLogoBox src={Bono} />
                    <NavMenuContainer>
                        <NavMenuExplorer>
                                EXPLORER
                        </NavMenuExplorer>
                        <NavMenuTrade>
                                TRADE
                        </NavMenuTrade>
                        <NavMenuMyPage>
                                MyPage
                        </NavMenuMyPage>
                        <NavMenuSignIn>
                                LogIn
                        </NavMenuSignIn>
                    </NavMenuContainer>
            </NavContainer>
            
        </>
    );
};

export default Header;