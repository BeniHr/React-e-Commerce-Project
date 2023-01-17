import { Route, Routes } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContextProvider';
import AuthLayout from './layouts/AuthLayout';
import StoreLayout from './layouts/StoreLayout';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<StoreLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/category/:id" element={<Category />}></Route>
                    <Route path="/wishlist" element={<Wishlist />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Route>
                <Route path="/login" element={<AuthLayout />}>
                    <Route index element={<Login />}></Route>
                </Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;