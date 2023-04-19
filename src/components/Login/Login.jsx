import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password);
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
                    <input type="submit" value="Login" />
                </div>
                <div style={{ marginTop: '10px'}}>{error}</div>
                <div style={{ marginTop: '10px'}}>{success}</div>
            </form>
        </div>
    );
};

export default Login;