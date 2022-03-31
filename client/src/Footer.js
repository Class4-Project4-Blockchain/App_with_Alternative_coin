import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";
// import Button from '../a';
import axios from 'axios';

const FooterContainer = styled.div`
    width: 500px;
    height: 100px;
    margin: auto;
    margin-bottom:200px;
`

function Footer(){
    

    return(
        
    <FooterContainer>
        
        {/* <div style={{marginLeft:"15px", float:"left"}}>
        <Button size="sm" color="type1">
        
        </Button>
        
         </div> */}
        
         
    </FooterContainer>
    
    )
    
    
}

export default Footer;