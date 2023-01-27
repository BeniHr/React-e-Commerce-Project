import './StoreLayout.css';

import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';

export default function StoreLayout() {
    return (
        <div className="store-layout">
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}