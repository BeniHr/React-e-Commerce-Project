import './Profile.css';

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';
import user from '../../data/user';
import ProductsViewed from '../components/ProductsViewed/ProductsViewed';

export default function Profile() {
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);

    return (
        <>
            <div className="user-profile-wrapper">
                <div className="user-profile">
                    <h2 className="title">Profile</h2>
                    <div className="profile">
                        <p className="profile-data">
                            Name: <span>{user.name}</span>
                        </p>
                        <p className="profile-data">
                            Email: <span>{user.email}</span>
                        </p>
                        <p className="profile-data">
                            Age: <span>{user.age}</span>
                        </p>
                        <p className="profile-data">
                            Current Location: <span>{user.location}</span>
                        </p>
                        <p className="profile-data">
                            Order address:{' '}
                            <span>{`${user.address.city}, ${user.address.street}, ${user.address.zip}, ${user.address.state}, ${user.address.country}`}</span>
                        </p>
                    </div>
                    <button onClick={() => handleLogout()} className="logout">
                        <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                    </button>
                </div>
            </div>
            <ProductsViewed />
        </>
    );
}