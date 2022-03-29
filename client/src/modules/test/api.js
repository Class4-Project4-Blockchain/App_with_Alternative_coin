import axios from "axios";
import fetch from "cross-fetch"
export async function postLogin(){

    const data = {id: "test", pw:"1234"}
    console.log("inputs",data.id, data.pw);

    const res = await fetch("https://api-tester.run.goorm.io/users/login",{
        method:"POST",
        body:JSON.stringify(data),
    }).then((res) => { res.json()})
    .then((result)=>{console.log(result)});
   
   
    const body = await res.json();
    console.log(body);
    return body;
}

export async function addUser(){
    const result = await axios.post("https://api-tester.run.goorm.io/users/join");
    console.log(result);
}