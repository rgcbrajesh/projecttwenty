import React, { useState } from 'react';
import "./Style.css"
import Bcom1sub from './Bcom1sub';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Hardcoded credentials (replace these with your actual authentication logic)
        const validUsername = 'user';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            setLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            {!loggedIn ? (
                <div className='login' >
                    <h1 className='login-text' >Log-in</h1>
                    <label >
                        Username: <br />
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password: <br />

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br /><br />
                    <button className='btn btn-primary mb-2' onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <Bcom1sub />
                </div>
            )}
        </div>
    );
};

export default LoginForm;
