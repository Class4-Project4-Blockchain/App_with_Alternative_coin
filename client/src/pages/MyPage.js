import React from 'react';
import { Route, withRouter } from 'react-router';
// import { BrowserRouter , Routes , Route, useParams, useLocation, useNavigate } from 'react-router';
import PageList from '../components/MyPage/PageList';
import Email from '../components/MyPage/Section/Email';
import Password from '../components/MyPage/Section/Password';
import Sendresult from '../components/MyPage/Section/Sendresult';
import Withdrawal from '../components/MyPage/Section/Withdrawal';
import Wallet from '../components/MyPage/Section/Wallet';
// import Walletdelete from '../components/MyPage/Section/Walletdelete';
import Walletdelete from '../components/MyPage/Walletdelete';


function MyPage({ match }) {
  return (
    <>          
      <Route exact path={match.path} component={PageList} />
      <Route path={`${match.path}/email`} component={Email} />
      <Route path={`${match.path}/password`} component={Password} />
      <Route path={`${match.path}/sendresult`} component={Sendresult} />
      <Route path={`${match.path}/wallet`} component={Wallet} />
      <Route path={`${match.path}/walletdelete`} component={Walletdelete} />
      {/* <Route path={`${match.path}/withdrawal`} component={Withdrawal} />        */}
      <Route path={`mypage/withdrawal`} component={Withdrawal} />       
    </>
  );
}

export default withRouter(MyPage);
