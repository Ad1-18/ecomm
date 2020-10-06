import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase.js";

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    

    const login = event => {
        // Prevents default refresh
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                // Logged in, redirect to home
                history.push("/");
            })
            .catch(event => alert(event.message));
    }

    const register= event => {
        // Prevents default refresh
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            // Logged in, redirect to home
            history.push("/");
        })
        .catch(event => alert(event.message));
    }


    return (
        <div className = "login">
            <Link to ="/">
                <img 
                    className = "login__logo"
                    src = {require('./ProdImg/logo.png')}
                    alt = ""
                />
            </Link>

            <div className = "login__container">
                <h1> Sign In </h1>
                <form>
                    <h5> E-mail </h5>
                    <input value={email} onChange = {event => setEmail(event.target.value)} type = "email"/>
                    <h5> Password </h5>
                    <input value = {password} onChange = {event => setPassword(event.target.value)} type = "password"/>
                    <button onClick = {login} type = "submit" className = "login__signIn">Sign in</button> 
                </form>

                <p>By signing-in you agree to JAS™️ conditions of Use and Sale. Please see our Privacy policy
                    for our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick = {register} className = "login__register">Create a new account</button>
            </div>
        </div>
    )
}

export default Login
