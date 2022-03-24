import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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

// function Withdrawal({ history }) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     mode: 'onTouched',
//   });
//   const dispatch = useDispatch();
//   const [ShowPassword, setShowPassword] = useState(false);
//   const password = useRef();
//   password.current = watch('password');

//   const handleVisibility = () => {
//     setShowPassword(!ShowPassword);
//   };

//   const onSubmit = useCallback(user => {
//     user._id = localStorage.getItem('userId');
//     let confirmWithdrawal = window.confirm(
//       '탈퇴하시겠습니까?                                                                              ※ 개인정보, 모든 게시물 등의 데이터가 삭제되며, 복구할 수 없습니다. ※',
//     );
//     confirmWithdrawal &&
//       dispatch(withdrawalUser(user)).then(response => {
//         if (!response.payload.changeSuccess) {
//           alert(response.payload.message);
//         } else {
//           if (response.payload.changeSuccess) {
//             alert('회원탈퇴가 완료되었습니다.');
//             history.push('/');
//           } else {
//             alert('회원탈퇴에 실패했습니다.');
//           }
//         }
//       });
//   });

//   return (
//     <FormBox onSubmit={handleSubmit(onSubmit)}>
//       <FormTitle>회원탈퇴</FormTitle>
//       <InputBox>
//         <label htmlFor="password">비밀번호</label>
//         <PasswordBox>
//           <FilledInput
//             id="password"
//             name="password"
//             type={ShowPassword ? 'text' : 'password'}
//             placeholder="대/소문자,숫자,특수문자 포함 8~20자"
//             {...register('password', {
//               required: true,
//               minLength: 8,
//               maxLength: 20,
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
//         <label htmlFor="confirmPassword">비밀번호 확인</label>
//         <FilledInput
//           id="confirmPassword"
//           name="confirmPassword"
//           type="password"
//           placeholder="비밀번호를 다시 입력해주세요."
//           {...register('passwordConfirm', {
//             required: true,
//             validate: value => value === password.current,
//           })}
//         />
//         {errors.passwordConfirm && (
//           <ErrorMessage>
//             {PasswordConfirmError[errors.passwordConfirm.type]}
//           </ErrorMessage>
//         )}
//       </InputBox>
//       <InputBox>
//         <li>
//           <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
//             회원탈퇴
//           </RegistButton>
//         </li>
//       </InputBox>
//     </FormBox>
//   );
// }

// export default Withdrawal;

function Withdrawal(){

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
                      회원탈퇴
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="sm" color="type2">
                  회원탈퇴
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="md" color="type1">
                  회원탈퇴
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="md" color="type2">
                  회원탈퇴
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="lg" color="type1">
                  회원탈퇴
                  </Button>
              </div>
              <div style={{marginLeft:"15px", float:"left"}}>
                  <Button size="lg" color="type2">
                  회원탈퇴
                  </Button>
              </div>
          </ButtonContainer>
      </>
  );
}

export default Withdrawal;