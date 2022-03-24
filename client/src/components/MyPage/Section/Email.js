import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import Button from './element/Button';

const HomeTestBack = styled.div`
    width: 1500px;
    height: 400px;
    margin: auto;
`;

const BetweenNavAndBody = styled.div`
    width: 1500px;
    height: 85px;
    margin: auto;
`;

const BetweenVertical = styled.div`
    width: 15px;
    height: 100%;
    float: left;
`;

const BonoColorExam_1 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #23518C;
    float: left;
`;
const BonoColorExam_2 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #5f94d9;
    float: left;
`;
const BonoColorExam_3 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #66a3d9;
    float: left;
`;
const BonoColorExam_4 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #80c7f2;
    float: left;
`;
const BonoColorExam_5 = styled.div`
    width: 288px;
    height: 100%;
    background-color: #f1f0f2;
    float: left;
`;

const ButtonContainer = styled.div`
    width: 1500px;
    height: 400px;
    margin: auto;
    margin-top: 15px;
`;
// function Email({ history }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: 'onTouched',
//   });
//   const dispatch = useDispatch();
//   const userFrom = localStorage.getItem('userId');
//   const [ShowPassword, setShowPassword] = useState(false);
//   const [oldEmail, getOldEmail] = useState('');
//   const handleVisibility = () => {
//     setShowPassword(!ShowPassword);
//   };

//   useEffect(() => {
//     dispatch(getEmail(userFrom)).then(response => {
//       getOldEmail(response.payload.email);
//     });
//   }, []);

//   const onSubmit = useCallback(user => {
//     user._id = userFrom;
//     dispatch(updateEmail(user)).then(response => {
//       if (!response.payload.changeSuccess) {
//         alert(response.payload.message);
//       } else {
//         if (response.payload.changeSuccess) {
//           alert('이메일이 변경되었습니다.');
//           history.push('/mypage');
//         } else {
//           alert(response.payload.message);
//         }
//       }
//     });
//   }, []);

//   return (
//     <FormBox onSubmit={handleSubmit(onSubmit)}>
//       <FormTitle>이메일 변경</FormTitle>
//       <InputBox>
//         <label htmlFor="oldEmail">현재 이메일</label>
//         <FilledInput id="oldEmail" name="oldEmail" value={oldEmail} readOnly />
//       </InputBox>
//       <InputBox>
//         <label htmlFor="email">변경할 이메일</label>
//         <FilledInput
//           id="email"
//           name="email"
//           type="email"
//           placeholder="변경할 이메일을 입력해주세요."
//           {...register('email', {
//             required: '이메일을 입력해주세요.',
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//               message: '이메일 형식이 올바르지 않습니다.',
//             },
//           })}
//         />
//         {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
//       </InputBox>
//       <InputBox>
//         <label htmlFor="password">비밀번호</label>
//         <PasswordBox>
//           <FilledInput
//             id="password"
//             name="password"
//             type={ShowPassword ? 'text' : 'password'}
//             placeholder="비밀번호를 입력해주세요."
//             {...register('password', {
//               required: true,
//               minLength: 8,
//               maxLenght: 20,
//               validate: {
//                 checkLang: value =>
//                   ![/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/].every(pattern =>
//                     pattern.test(value),
//                   ),
//                 checkLower: value =>
//                   [/[a-z]/].every(pattern => pattern.test(value)),
//                 checkUpper: value =>
//                   [/[A-Z]/].every(pattern => pattern.test(value)),
//                 checkNumber: value =>
//                   [/[0-9]/].every(pattern => pattern.test(value)),
//                 checkSpec: value =>
//                   [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)),
//               },
//             })}
//           />
//           <PasswordButton>
//             <IconButton aria-label="toggle_password" onClick={handleVisibility}>
//               {ShowPassword ? <Visibility /> : <VisibilityOff />}
//             </IconButton>
//           </PasswordButton>
//         </PasswordBox>
//         {errors.password && (
//           <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
//         )}
//       </InputBox>
//       <InputBox>
//         <li>
//           <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
//             이메일 변경
//           </RegistButton>
//         </li>
//       </InputBox>
//     </FormBox>
//   );
// }

// export default Email;

function Email(){

  return(        
      <>
      <BetweenNavAndBody />
          <HomeTestBack>
              <BonoColorExam_1 />
              <BetweenVertical />
              <BonoColorExam_2 />
              <BetweenVertical />
              <BonoColorExam_3 />
              <BetweenVertical />
              <BonoColorExam_4 />
              <BetweenVertical />
              <BonoColorExam_5 />
          </HomeTestBack>

          <ButtonContainer>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="sm" color="type1">
                    이메일
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="sm" color="type2">
                    이메일
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="md" color="type1">
                    이메일
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="md" color="type2">
                    이메일
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="lg" color="type1">
                    이메일
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="lg" color="type2">
                    이메일
                  </Button>
              </div>
          </ButtonContainer>
      </>
  );
}

export default Email;