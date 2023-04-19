import React from 'react';
import { useState } from 'react';
import { getAuth , signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import app from '../../firebase/firebase.config'
import { useRef } from 'react';

const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser  = result.user;
            setSuccess('Logged in done!!!');
            setError('');
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        });
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            alert('Provide your email...');
        }
        sendPasswordResetEmail(auth, email)
        .then(result => {
            alert('Please check your email...');
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
        })
    }

    return (
        <div style={{ textAlign:'center', marginTop: '10px'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" ref={emailRef} name="email" placeholder='Email' id="email" required />
                </div>
                <br></br>
                <div>
                    <input type="password" name="password" placeholder='Password' id="password" required />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Login" />
                </div>
                <div style={{ marginTop: '10px'}}>
                    <button onClick={handleResetPassword}>Forget Password?</button>
                </div>
                <div style={{ marginTop: '10px'}}>{error}</div>
                <div style={{ marginTop: '10px'}}>{success}</div>
            </form>
        </div>
    );
};

export default Login;