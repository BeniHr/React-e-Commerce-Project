import './Login.css';

import { faEnvelope, faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';

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
                    <label>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="name@gmail.com"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>
                        <FontAwesomeIcon className="icon" icon={faKey} /> Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button
                    disabled={!(email && password)}
                    className="login-button"
                    onClick={() => login()}
                >
                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                </button>
            </div>
        </div>
    );
}