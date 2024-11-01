import React, { useRef } from 'react'

function Login() {
    // const user = "naidu";
    // const pass = "naidu@13";

    const userName = useRef(null);
    const password = useRef(null);

    const handleAction = () => {
        if(userName === "naidu" && password === "naidu@13"){
            alert("login succesful");
        }
        else{
            alert("login failed");
        }
    }
  return (
    <>
      <h1>Login</h1>
      <input ref={userName} type='text' placeholder='enter username' /><br></br>
      <input ref={password} type='text' placeholder='enter password' /><br></br>
      <button onClick={handleAction}>login</button>
    </>
  )
}


export default Login;
