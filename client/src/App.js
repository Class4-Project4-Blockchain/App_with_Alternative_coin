import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Reference from './components/pages/Reference.js';
import Auth from 'library/utils/auth';

const MyPage = loadable(() => import('pages/MyPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInit());
  }, [dispatch]);
  return (
    <>
        <Routes>
              <Route path="/" element={<Reference/>}/>
              <Route path="/mypage" component={Auth(MyPage, true)} />
        </Routes>
    </>
  );
}

// 안성준. 노드몬 동시 실행안돼서 package.json 에서 잠시 옮겨둠.
// "start": "npm-run-all -p starts:**",
// "starts:client": "react-scripts start",
// "starts:server": "nodemon ../server/server.js",

export default App;
