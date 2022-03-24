import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";

function Coinsend() {
    return (
      <>
        <MyPageBox>
          <ul>
            <MyPageTitle>코인보내기</MyPageTitle>
            <MyPageList>
              <li>
                <Link to="/mypage/coinsend">코인보내기</Link>
              </li>
              <li>
                <Link to="/mypage/coinsend">코인보내기</Link>
              </li>
              <li>
                <Link to="/mypage/coinsend">코인보내기</Link>
              </li>
            </MyPageList>
          </ul>          
        </MyPageBox>
      </>
    );
  }
  export default withRouter(Coinsend);

  const MyPageBox = styled.div`
  border-radius: 10px;
  width: 600px;
  padding: 50px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const MyPageTitle = styled.li`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 3px;
  font-weight: 600;
  color: #80C7F2;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const MyPageList = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #F0F1F2;
`;