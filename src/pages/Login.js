import './Login.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContextProvider';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        navigate('/');
    };

    return (
        <div className="login">
            <h4 className="title">Login with your Account</h4>
            <div className="login-form-wrapper">
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {email && password && (
                    <button className="login-button" onClick={() => login()}>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}