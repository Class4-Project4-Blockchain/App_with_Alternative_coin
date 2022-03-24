import './assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reference from './pages/Reference';
import MyPage from '../src/components/MyPage/PageList';

function App() {  
  return (
    <>
      <Router>
        <Switch>
              <Route exact path="/" component={Reference}/>
              <Route path="/mypage" component={MyPage}/>
        </Switch>
      </Router>
    </>
  );
}

// 안성준. 노드몬 동시 실행안돼서 package.json 에서 잠시 옮겨둠.
// "start": "npm-run-all -p starts:**",
// "starts:client": "react-scripts start",
// "starts:server": "nodemon ../server/server.js",

export default App;
