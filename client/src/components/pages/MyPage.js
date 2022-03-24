import React from 'react';
import { Route, useParams, useLocation, useNavigate } from 'react-router';
import PageList from '../MyPage/PageList';
import Email from '../MyPage/Section/Email';
import Password from '../MyPage/Section/Password';
import Sendresult from '../MyPage/Section/Sendresult';
import Withdrawal from '../MyPage/Section/Withdrawal';
import Wallet from '../MyPage/Section/Wallet';
import Walletdelete from '../MyPage/Section/Walletdelete';

// function MyPage({ match }) {
  // function MyPage() {
    const MyPage = () => {
      const params = useParams();
      const location = useLocation();
      const navigate = useNavigate();
      <button onClick={() => navigate('/')}>홈으로</button>

  return (
    <>
      <Route index element={<PageList/>} />
      <Route path="email" element={<Email/>} />
      {/* <Route path={match.path} element={<PageList/>} />
      <Route path={`${match.path}/email`} element={<Email/>} />
      <Route path={`${match.path}/password`} element={<Password/>} />
      <Route path={`${match.path}/sendresult`} element={<Sendresult/>} />
      <Route path={`${match.path}/wallet`} element={<Wallet/>} />
      <Route path={`${match.path}/walletdelete`} element={<Walletdelete/>} />
      <Route path={`${match.path}/withdrawal`} element={<Withdrawal/>} /> */}
    </>
  );
}

export default MyPage;
