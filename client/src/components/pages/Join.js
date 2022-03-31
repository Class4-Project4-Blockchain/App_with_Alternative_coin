import React, {useState} from "react";
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
  const [Inputs, setInputs] = useState({
    id: "", pw: "", pw2:"", email:""
  });
  const {id, pw, pw2, email} = Inputs;

const axiosLogin = ()=>{
}

const onChange = (e)=> {
  console.log(e.target.value);
    const {value, name} = e.target;
    setInputs({
      ...Inputs,
      [name]:value
    });

    setInputs({
      id:id,
      pw:"",
      pw2:"",
      email:email
    })
  }
const onSubmit = async (e)=>{
  e.preventDefault(); // submit 이벤트 발생시 refresh 방지
  console.log({Inputs})

  let url = /*"https://api-tester.run.goorm.io" || */"http://localhost:3001";
  let option = { url, Inputs, }
  const headers = {
    'Content-Type': 'text/plain'
  };
  await axios.post(option, {headers}, { withCredentials: true })
    .then(res =>{console.log(res.data)})
    .catch(error=>{console.log(error)});
}
  return (
    <>
      <InputWrap>
        <Contents>
          <form onSubmit={onSubmit} >
            <label>
              아이디
              <input 
              type="text" 
              placeholder=" 아이디 입력" 
              name="id"
              value={id || ""} 
              onChange={onChange} required/>
            </label>
            <br />
            <label>
              패스워드
              <input
                type="password"
                name="pw"
                placeholder=" 8자리 이상의  영문,숫자,특수문자"
                value={pw || ""}
                onChange={onChange}
              />
            </label>
            <br />
            <label>
              패스워드 확인
              <input
                type="password"
                name="pw2"
                placeholder=" 8자리 이상의  영문,숫자,특수문자"
                value={pw2 || ""}
                onChange={onChange}
              />
            </label>
            <br />
            <label>
              이메일 입력
              <input 
              type="email" 
              name="email"
              placeholder=" 이메일입력"
              value={email || ""}
              onChange={onChange}
              />
            </label>
            <br />
            <Link to="/mypage">
              <Button size="lg" color="type2">
                보노 회원가입
              </Button>
            </Link>
            <br />
            <Link to="/mypage">
              <input
                type="image"
                className="submit"
                src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png"
              />
            </Link>
            <br />
            <Link to="/mypage">
              <input
                type="image"
                className="submit"
                src="https://static.nid.naver.com/oauth/big_g.PNG?version=js-2.0.1"
              />
            </Link>
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
