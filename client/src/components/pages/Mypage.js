import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import MyPage from '../MyPage/MyPage';
import Button from '../element/Button';

function MyPage() {

    const [Dbdata, SetDbdata] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/mywallet/show').then(({data})=>{
            SetDbdata((data));
        console.log(data);
        })
      }, []);

      //  axios를 통해 가공된 data를useState를 통해 Dbdata에 저장  이후에 ↓↓↓↓↓ 로컬스토리지에 저장
    window.localStorage.setItem('x', JSON.stringify(Dbdata[0].name));
    window.localStorage.setItem('y', JSON.stringify(Dbdata[0].no));
    window.localStorage.setItem('z', JSON.stringify(Dbdata[0].pwd)); 

     /// ↓↓↓↓↓ 로컬에 저장된걸 변수에 저장
    var x = window.localStorage.getItem('x');
    var y = window.localStorage.getItem('y');
    var z = window.localStorage.getItem('z');

    return (
        <>
             <MyPageBox>
        <ul>
          <MyPageTitle>마이페이지</MyPageTitle>
          <MyPageList>
            <li>
              아이디 
              <input type="text" value={x} style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
                
              </input>           
            </li>
            <li>
              이메일 
              <input type="text" value={y} style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </input>  
            </li>
            <li>
              지갑주소 
              <input type="text" value={z} style={{marginBottom : '20px' , border : '1px solid #23518C', padding: '20px'}}>
              </input>  

              </li>
              {/* 여기는 참고용이라 주석 <input type="text" value={Dbdata[0].no}></input> */}
               {/* //  <input type="text" value={Dbdata[0].name}></input> */}
          {/* <br></br> */}
        {/* //  <input type="text" value={Dbdata[0].pwd}></input> 여기까지 주석*/}
                        
          </MyPageList>
        </ul>          
      </MyPageBox>      
        <BetweenNavAndBody />
        <MyPage />       
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