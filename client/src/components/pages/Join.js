import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
// Irequire('dotenv').config({ path: __dirname + '../../../../server/utils/.env' });

const Wrapper = styled.section`
  margin: 2em auto;
  padding: 0.1em;
  background: #23518c;
  /* background: papayawhip; */
`;
const Title = styled.h1`
/* margin-top: 8%; */
font-size: 1.5em;
  text-align: center;
  color: #80c7f2;
  /* color: palevioletred; */
  `;
const InputWrap = styled.div`
  width: 588px;
  height: 100%;
  background-color: #f1f0f2;
  margin: 0 auto;
  padding: 25px;
  border-radius: 8px;
  font-size: 16px;
  display: block;
  text-align: center;
  img {
    margin-top: 10px;
    width: 275px;
    height: 45px;
  }
  label {
  }
  input {
    width: 220px;
    height: 25px;
    border-radius: 4px;
    margin: 0.5vh 2vh;
  }
  Button {
    border-radius: 4px;
    font-size: 16px;
    width: 275px;
    height: 45px;
    margin-top: 10px;
  }
  .submit {
    width: 275px;
    height: 45px;
    margin: 0.5vh 2vh;
  }
`;

const Contents = styled.div``;


function Inputs() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [pw2, setPw2] = useState();
  const [email, setEmail] = useState();

  const onChangeHandle1 = (e)=>{setId(e.target.value);  }
  const onChangeHandle2 = (e)=>{    setPw(e.target.value);  }
  const onChangeHandle3 = (e)=>{    setPw2(e.target.value);  }
  const onChangeHandle4 = (e)=>{    setEmail(e.target.value);  }

  const data = {
    id: id,
    pw: pw,
    pw2: pw2,
    email: email
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("Inputs :", id, pw, pw2, email);
    axios.post("http://localhost:3001/users/join" //"http://localhost:3001/users/join"
    , data)  
    .then(res =>{
      // console.log("res",res);
      const userState = res.data.id;
      if(userState){
        window.localStorage.setItem('user',  userState);
        window.location.replace('/trade');
      }
    
    })
    .catch(err =>{console.error(err)})
  }
  return (
    <>
      <InputWrap>
        <Contents>
          <form onSubmit={onSubmit}>
            <label>
              아이디
              <input type="text"
              name="id"
              value={id || ""}
              onChange={onChangeHandle1}
               placeholder=" 아이디 입력" />
            </label>
            <br />
            <label>
              패스워드
              <input 
              name="pw"
              type="password"
              value={pw || ""}
              onChange={onChangeHandle2}
              placeholder=" 8자리 이상의  영문,숫자,특수문자"
              />
            </label>
            <br />
            <label>
              패스워드 확인
              <input name="pw2"
                type="password"
                value={pw2 || ""}
                onChange={onChangeHandle3}
                placeholder=" 8자리 이상의  영문,숫자,특수문자"
              />
            </label>
            <br />
            <label>
              이메일 입력
              <input type="email" 
              value={email || ""}
              onChange={onChangeHandle4}
              placeholder=" 이메일입력" />
            </label>
            <br />
              <Button size="lg" color="type2">
                보노 회원가입
              </Button>
            <br />
            {/* <Link to="/mypage"> */}
              <input
                type="image"
                className="submit"
                src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png"
              />
            {/* </Link> */}
            <br />
            {/* <Link to="/mypage"> */}
              <input
                type="image"
                className="submit"
                src="https://static.nid.naver.com/oauth/big_g.PNG?version=js-2.0.1"
              />
            {/* </Link> */}
            <br />
          </form>
        </Contents>
      </InputWrap>
    </>
  );
}

export default function Login() {
  return (
    <>
      <Wrapper>
        <Title>회원가입</Title>
      </Wrapper>
      <Inputs></Inputs>
    </>
  );
}