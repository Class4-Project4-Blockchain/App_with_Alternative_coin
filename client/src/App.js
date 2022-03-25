import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Trade from "./components/pages/Trade";
import Mypage from "./components/pages/Mypage";
import Login from "./components/pages/Login";
import Join from "./components/pages/Join";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

// 안성준. 노드몬 동시 실행안돼서 package.json 에서 잠시 옮겨둠.
// "start": "npm-run-all -p starts:**",
// "starts:client": "react-scripts start",
// "starts:server": "nodemon ../server/server.js",

export default App;
