import './Navbar.css';

import {
    faHeart,
    faRightFromBracket,
    faRightToBracket,
    faShoppingCart,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';
import categories from '../../data/categories';

export default function Navbar() {
    const navigate = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleAuth = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link className="logo" to="/">
                    LOGO
                </Link>
                <div className="categories">
                    <ul className="categories-list">
                        {categories.map((category, index) => {
                            return (
                                <li key={index} className="category">
                                    <Link className="link" to={`/category/${category.id}`}>
                                        {category.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="profile">
                {isAuthenticated && (
                    <div className="wishlist-cart">
                        <Link className="link" to="/wishlist">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                        <Link className="link" to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                        <Link className="link" to="/profile">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                    </div>
                )}
                <button className="login" onClick={() => handleAuth()}>
                    {!isAuthenticated ? (
                        <>
                            <FontAwesomeIcon icon={faRightToBracket} /> Login
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}