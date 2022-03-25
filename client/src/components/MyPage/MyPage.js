import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

function MyPage() {
    return (
        <>
             <MyPageBox>
        <ul>
          <MyPageTitle>마이페이지</MyPageTitle>
          <MyPageList>
            <li>
              아이디 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
                  
              </form>           
            </li>
            <li>
              이메일 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </form>  
            </li>
            <li>
              지갑주소 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </form>  
            </li>            
          </MyPageList>
        </ul>          
      </MyPageBox>      
        </>
    )
}

export default MyPage;

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
  color: #23518C;
  background-color: #f0f1f2 ;
`;

const MyPageTitle = styled.li`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 3px;
  font-weight: 600;
  color: #23518C;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #f0f1f2 ;
`;

const MyPageList = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #f0f1f2;
`;