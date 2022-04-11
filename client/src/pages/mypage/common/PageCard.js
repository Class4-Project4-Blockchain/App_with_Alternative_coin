import React from "react";
import styled from "styled-components";

const BrowserBlock = styled.div`
// span{ //
//     border:dotted gray 0.2px;
// }
// ul{ //
//   border: dotted 0.5px lightseagreen;
// }
// li{ //
//     border:dotted gray 0.2px;
// }
// div{ //
//     border:dotted coral 0.4px;
// }

margin: 0 auto;
width:1100px;
height:2500px;

`;
const NonBrowserBlock = styled.div`
span{ //
    border:dotted gray 0.2px;
  }
  li{ //
    border:dotted gray 0.2px;
  }
margin: 0 auto;
width:564px;
height:2500px;

`;

export default function TemplateCard({children}){
    if(window.innerWidth< 800){
        return <><NonBrowserBlock>{children}</NonBrowserBlock></>
    }
    return <><BrowserBlock>{children}</BrowserBlock></>
}