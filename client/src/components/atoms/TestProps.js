import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const CrashBackColor = styled.div`
    width: 150px;
    height: 150px;
    background-color: red;
`;

function TestProps (props) {

    const [testState, setTestState] = useState(props.coinName);

    // switch(props.coinName)
    // {
    //     case "BTC":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "ETH":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "BCH":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "LTC":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "ETC":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "EOS":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "XRP":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "DOGE":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    //     case "BTG":
    //         setTestState(props.coinName);
    //         console.log("coinName = ", props.coinName);
    //         break;
    // }

    if(props.coinName !== undefined)
    {
        console.log("coinName = ", props.coinName);//z
    }

    return (
        <>
            <CrashBackColor />
                <div> 코인프롭스테스트중 {props.coinName}</div>
        </>
    )
}

export default TestProps;