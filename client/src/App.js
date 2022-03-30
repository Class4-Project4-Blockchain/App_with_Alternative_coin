import './assets/css/App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Trade from './components/pages/Trade';
import Mypage from './components/pages/Mypage';
import Login from './components/pages/Login';
import "./assets/css/App.css";
import Join from "./components/pages/Join";
<<<<<<< HEAD
import Reference from "./components/pages/Reference";
=======
import axios from 'axios';
>>>>>>> c06a0288f9fef4af5bf98ec33c6c726ae084e4a6

function App() {
  // const [Dbdata, SetDbdata] = useState([]);

  // useEffect(()=>{
  //     axios.get('http://localhost:3001/mywallet/show').then(({data})=>{
  //         SetDbdata((data));
  //       console.log(data);
  //     }).then(
        
  //     )
  //   }, []);

  // window.localStorage.setItem('logindata', JSON.stringify(Dbdata));
    
  // var data = window.localStorage.getItem('logindata');
  //   // console.log(data); //string

  // if(data !== null){
  //   // var parsedata = JSON.parse(d1)
  //   var parsedata1 = JSON.parse(data); //객체
  //   // console.log(parsedata);
  //   console.log(parsedata1[0]);
  //   console.log(parsedata1[1]);

  //   window.localStorage.setItem('logindataparsed', parsedata1[0]);
    
  //   console.log(parsedata1[0]);
  //   var dataparsedno = window.localStorage.getItem('logindataparsed');
  //       // window.localStorage.setItem('logindataparsed', parsedata1[1].no);
  //   console.log((dataparsedno));

  //     // if(parsedata1 !== null){
  //     //   var parsedata2 = JSON.parse(parsedata1.name)
  //     //   console.log(parsedata2);
  //     // }

  // }
    // var e1 = window.localStorage.getItem('e');

    // var parsed1 = JSON.parse(d1);
    // console.log(parsed1);
    // console.log(parsed1.no);

    // console.log(d);
    // console.log(e1);



    // var dinfo = window.localStorage.getItem(d.no);

    // console.log(dinfo);


  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Reference />} />
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
