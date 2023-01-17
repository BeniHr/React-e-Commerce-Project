import './AuthLayout.css';

import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="wrapper">
            <Outlet />
        </div>
    );
}