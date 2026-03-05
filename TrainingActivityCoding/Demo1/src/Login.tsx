import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const correctUserName = "admin";
    const correctPassword = "admin123";
    return (
        <>
        <h1>Login Page</h1>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}></input><br></br>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
         <button onClick={
            ()=>{
                  let user = {
                    username: username,
                    password: password
                  };
                  axios.post("http://localhost:9999/signin", user).then((response)=>{
                    if(response.data === "Success"){
                        alert("Login Successful");
                        sessionStorage.setItem("token",response.data.token);
                        sessionStorage.setItem("isLoggedInUser", "true");
                        navigate("/Home");
                    }
                    else{
                        alert("Login Failed");
                    }
                 }
                );
                // if(username === correctUserName && password === correctPassword){
                //     alert("Login Successful");
                //     sessionStorage.setItem("isLoggedInUser", "true");
                //     navigate("/Home");
                // }
                // else{
                //     alert("Login Failed");
                // }
            }
         }>Login</button>
        </>
    );
}

export default Login;