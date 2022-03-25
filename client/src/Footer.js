import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from '../src/components/element/Button';
import axios from 'axios';

const FooterContainer = styled.div`
    width: 500px;
    height: 100px;
    margin: auto;
    margin-bottom:200px;
`

function Footer(){
    const [Dbdata, SetDbdata] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/mywallet/show').then(({data})=>{
            SetDbdata((data));
        console.log(data);
        })
      }, []);


    //  window.localStorage.setItem('y', JSON.stringify(Dbdata[0].no));
    //  window.localStorage.setItem('z', JSON.stringify(Dbdata[0].pwd));

     var x = window.localStorage.getItem('x');
    var y = window.localStorage.getItem('y');
    var z = window.localStorage.getItem('z');

    return(
        
    <FooterContainer>
        
        <div style={{marginLeft:"15px", float:"left"}}>
        <Button size="sm" color="type1">
            보노
        </Button>
        
         </div>
        
         <br></br>  {/*웹 새로고침하면 이 부분이 에러임/ 웹을 새로고침하면 db데이터가 날아가는듯 함.*/}

          {/* <input type="text" value={Dbdata[0].no}></input> */}
          <input type="text" value={y}></input>
          <input type="text" value={x}></input>
          <input type="text" value={z}></input>
          <br></br>
        {/* //  <input type="text" value={Dbdata[0].name}></input> */}
          <br></br>
        {/* //  <input type="text" value={Dbdata[0].pwd}></input> */}
    </FooterContainer>
    
    )
    
    
}

export default Footer;