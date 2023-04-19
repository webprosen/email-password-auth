import React from 'react';
import { getAuth , createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config'
import { useState } from 'react';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const handleSubmit = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setSuccess('');
        setError('');

        if(!/(?=.*[0-9])/.test(password)){
            setError('At least one NUMBER');
            return;
        }
        else if(password.length < 6){
            setError('Minimum length 6+');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(result);
            event.target.reset();
            setSuccess('User created successfully');
            sendEmail(user);
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });

        const sendEmail = user => {
            sendEmailVerification(user)
            .then(result => {
                alert('Please verify your email');
            })
        }
    }

    return (
        <div style={{ textAlign:'center', marginTop: '10px'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder='Email' id="email" required />
                </div>
                <br></br>
                <div>
                    <input type="password" name="password" placeholder='Password' id="password" required />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Register" />
                </div>
                <div style={{ marginTop: '10px'}}>{error}</div>
                <div style={{ marginTop: '10px'}}>{success}</div>
            </form>
        </div>
    );
};

export default Register;