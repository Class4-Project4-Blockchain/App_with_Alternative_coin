import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true

const Wrapper = styled.section`
  margin: 2em auto;
  padding: 0.1em;
  background: #23518c;
  /* background: papayawhip; */
`;
const Title = styled.h1`
  margin-top: 3.5em;
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
    width: 180px;
    height: 25px;
    border-radius: 3px;
    margin: 0.5vh 2vh;
  }
  Button {
    font-size: 16px;
    width: 275px;
    height: 45px;

    border-radius: 4px;
  }
  .submit {
    width: 275px;
    height: 45px;
    margin: 0.5vh 2vh;
  }
`;

function Inputs() {

  let url =  "http://localhost:3001";//"https://api-tester.run.goorm.io" 
  const headers = {
    'Content-Type': 'text/plain',
    "Access-Control-Allow-Origin" : "*"
  };
  const [Inputs, setInputs] = useState({
    id:"", pw:""
  });
  const {id, pw} = Inputs;

  const onChange = (e) =>{
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]:value
    })
  }

  const onSubmit =  (e)=>{
    e.preventDefault(); // submit 이벤트 발생시 refresh 방지
    console.log({Inputs})

  axios.post(url+"/users/login", {id:Inputs.id, pw:Inputs.pw}, {headers})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
          console.log(err)
    })
    setInputs({
      userid : id,
      password : '',
    });
  }
  return (
    <>
      <InputWrap>
        <form onSubmit={onSubmit}>
          <label>
            아이디
            <input type="text" placeholder="아이디 입력" 
            name="id"
            value={id || ""}
            onChange={onChange}
            />
          </label>
          <br />
          <label>
            패스워드
            <input type="text" placeholder="패스워드 입력"
            name="pw"
             value={pw || ""}
             onChange={onChange}
            />
          </label>
          <br />
          {/* <Link to="/mypage"> */}
            <Button size="lg" color="type2">
              보노로그인
            </Button>
          {/* </Link> */}
          <br />
          {/* <Link to="/mypage"> */}
            <input
              type="image"
              className="submit"
              src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png"
            />
          {/* </Link> */}
          <br />
          <Link to="/mypage">
            <input
              type="image"
              className="submit"
              src="https://static.nid.naver.com/oauth/big_g.PNG?version=js-2.0.1"
            />
          </Link>
        </form>
      </InputWrap>
    </>
  );
}

export default function Login() {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
      </Wrapper>
      <Inputs></Inputs>
    </>
  );
}
