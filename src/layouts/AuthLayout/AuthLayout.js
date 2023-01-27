import './AuthLayout.css';

import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="wrapper">
            <h1 className="logo">LOGO</h1>
            <Outlet />
        </div>
    );
}