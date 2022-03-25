import './assets/css/App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Reference from './components/pages/Reference.js';
import axios from 'axios';
import MyPage from '../src/components/MyPage/PageList';

function App() {

    // useEffect(()=>{
    //   axios.get('http://localhost:3001/mywallet/show').then((response)=>{
    //     console.log(response.data)
    //   })
    // }, [])

  return (
    <>
        <Routes>
              <Route path="/" element={<Reference/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
    </>
  );
}

// 안성준. 노드몬 동시 실행안돼서 package.json 에서 잠시 옮겨둠.
// "start": "npm-run-all -p starts:**",
// "starts:client": "react-scripts start",
// "starts:server": "nodemon ../server/server.js",

export default App;
