import React, { useState } from 'react';
import Bca1sub from "./Bca1sub";
import "./Style.css";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // Array to store user credentials
    const users = [
        { username: 'user', password: 'password' },
        { username: 'abhishek', password: 'abhi@6261' },
         { username: 'ankitgurjar24681@gmail.com', password: 'ankit@7063' },
        // Add more users as needed
    ];

    const handleLogin = () => {
        // Check if the entered credentials match any user
        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
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
                <div className='login'>
                    <h1 className='login-text'>Log-in</h1>
                    <label>
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
                    <Bca1sub />
                    <button className='btn btn-primary mb-2' onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
