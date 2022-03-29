import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const ctrl = require('/workspace/App_with_Alternative_coin/server/controllers/controllers');

// require("dotenv").config({ path: __dirname + "/.env" });



function MyPage() {

  const [Dbdata, SetDbdata] = useState([]);
  const [Avalue, SetValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{ //마이페이지에 들어왔을 때 콘솔에 walletinfo 띄움.
    axios.get('http://localhost:3001/mywallet/getblockcount').then(({data})=>{
        SetDbdata((data));
      console.log(data);
    })
  }, []);

const handlechange = ({ target: { value }}) => SetValue(value);

const handleSubmit = async (event) => {
  setDisabled(true);
  event.preventDefault();
  await new Promise((r) => setTimeout(r, 1000));
  alert(`변경된 패스워드: ${Avalue}`);
  setDisabled(false);
  console.log(Avalue)
};

  // console.log(Dbdata.result.hdmasterkeyid)

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
              
              <form onSubmit={handleSubmit}>
              지갑생성  
              <input type='text' name="account" value={Avalue} onChange={handlechange}></input>
              <button type="submit" disabled={disabled}>만들기</button>  
              </form>
            </li>
            <li>
              이메일 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </form>  
            </li>
            <li>
              지갑주소 
              <input style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </input>  
            </li>            
          </MyPageList>
        </ul>
        <ul>
          <MyPageTitle>송금</MyPageTitle>
          <MyPageList>
            <li>
              보낼지갑주소
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '5px'}}>
              <input name="payto" style={{width : '99%', borderWidth: '0', height: '25px'}}/>                  
              </form>           
            </li>
            <li>
              보내는수량 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '5px'}}>
              <input name="amount" style={{width : '99%', borderWidth: '0', height: '25px'}} placeholder='0.00000000'/>              
              </form>  
            </li>
            <button type="submit">보내기</button>                      
          </MyPageList>
        </ul>
        <ul>
          <MyPageTitle>송금내역</MyPageTitle>
          <MyPageList>
            <li>
              최근 송금내역
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