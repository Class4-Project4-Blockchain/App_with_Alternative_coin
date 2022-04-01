export default function Logout(){
    window.location.replace('/trade');
    localStorage.removeItem("user");
    return (<>
    <div>
        <h1>화면 로딩중..</h1>
    </div>
    </>);
}