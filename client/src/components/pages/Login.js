import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


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
 
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const onChangeHandle1 = (e)=>{setId(e.target.value);  }
  const onChangeHandle2 = (e)=>{    setPw(e.target.value);  }


  const data = {
    id: id,
    pw: pw,
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("Inputs :", id, pw);
    axios.post("http://localhost:3001/users/login", data)  
    .then(res =>{
      console.log(res);
      const {result} = res.data;
      const userState = JSON.stringify(result);
      if(userState){
        window.localStorage.setItem('user',  userState);
        window.location.replace('/trade');
      }
      else{
        window.alert("올바른 email과 비밀번호를 입력해주세요")
      }
      // window.location.replace('/');
  })
    
    .catch(err =>{console.error(err)})
  }
  return (
    <>
      <InputWrap>
        <form action="https://api-tester.run.goorm.io/users/login" method="post">
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
            <input type="password" 
              name="pw"
              value={pw || ""}
              onChange={onChangeHandle2}
              placeholder=" 8자리 이상의  영문,숫자,특수문자"
              />
          </label>
          <br />
          {/* <Link to="/mypage"> */}
            <Button type="submit" size="lg" color="type2">
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
