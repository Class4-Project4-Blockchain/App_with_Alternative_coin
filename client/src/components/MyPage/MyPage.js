import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const ctrl = require('/workspace/App_with_Alternative_coin/server/controllers/controllers');

// require("dotenv").config({ path: __dirname + "/.env" });

function MyPage() {

  const [Result, SetResult] = useState('');
  const [Dbdata, SetDbdata] = useState([]);
  const [Avalue, SetValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{ //마이페이지에 들어왔을 때 콘솔에 walletinfo 띄움.
    axios.get('http://localhost:3001/mywallet/getblockcount').then(({data})=>{
        SetDbdata((data));
      console.log(data);
    })
  }, []);

  // ↓↓↓↓↓↓↓↓↓↓↓ 지갑생성

const handlechange = ({ target: { value }}) => SetValue(value);

const IDSubmit = async (event) => {
  setDisabled(true);
  event.preventDefault();
  await new Promise((r) => setTimeout(r, 1000));
  alert(`지갑생성완료: ${Avalue}`);

axios.post('http://localhost:3001/mywallet/getnewaddress',{
  account: Avalue
}).then(()=>{
  console.log('post완료')
  console.log(Avalue)
});  
  setDisabled(false);
  
};
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑지갑생성

// ↓↓↓↓↓↓↓↓↓↓↓ 지갑찾기
const FindWalletSubmit = async (event) => {
  setDisabled(true);
  event.preventDefault();
  await new Promise((r) => setTimeout(r, 1000));
  alert(`찾을 지갑의 계정: ${Avalue}`);

axios.post('http://localhost:3001/mywallet/getaddressesbyaccount/taesu1',{
  account: Avalue
}).then((result)=>{
  console.log(result.data.result[0])
  SetResult(result.data.result[0]); //변경값을 이렇게 설정한 이유는 인풋에서 설정하려고하면 속성을 못읽어서 새로고침하면 값이 날아가버려오류생김.
  
});
  setDisabled(false);
  
};

// console.log(Result);

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑지갑찾기

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
              
              <form onSubmit={IDSubmit}>
                
              <input type='text' placeholder='원하는 id입력' name="account" value={Avalue} onChange={handlechange}></input>
              <button type="submit" disabled={disabled}>지갑생성</button>  
              </form>
            </li>
            <li>
              이메일 
              <form style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </form>  
            </li>
            <li>
            <form onSubmit={FindWalletSubmit}>
              <input placeholder='원하는 id입력' name="account" value={Avalue} onChange={handlechange} style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </input>  
              <button type="submit" disabled={disabled}>지갑주소찾기</button>
              <input type='text' placeholder='찾는 지갑주소' value={Result} onChange={handlechange}></input> 
              </form>
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