
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const history= useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const signIn=e=>{
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error =>alert(error.message))

    }

    const register = e=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=> {
                //it successfully created a user with email and password
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="text" 
                    value={email} 
                    onChange=
                    {e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type="password" 
                    value={password} 
                    onChange=
                    {e => setPassword(e.target.value)}
                    />

                    <button 
                    type="submit" 
                    onClick={signIn} 
                    className="login__signinButton">Sign In</button>
                </form>

                <p>To sign up for the Amazon Clone service, one can access the Information. Privacy Policy and Terms & Conditions and agree to receive newsletters</p>

                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>

        
    )
}

export default Login
