import React from 'react';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
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

        if(!/(?=.*[A-Z])/.test(password)){
            setError('At least one UPPERCASE');
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('At least one NUMBER');
            return;
        }
        else if(password.length < 6){
            setError('Minimum length 6+');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            event.target.reset();
            setSuccess('User created successfully');
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
        
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