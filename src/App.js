import { Route, Routes } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContextProvider';
import ProductsContextProvider from './contexts/ProductsContextProvider';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import StoreLayout from './layouts/StoreLayout/StoreLayout';
import Cart from './pages/Cart/Cart';
import Category from './pages/Category/Category';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Profile from './pages/Profile/Profile';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
    return (
        <AuthContextProvider>
            <ProductsContextProvider>
                <Routes>
                    <Route path="/" element={<StoreLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/category/:id" element={<Category />}></Route>
                        <Route
                            path="/category/:categoryId/product/:productId"
                            element={<Product />}
                        ></Route>
                        <Route path="/wishlist" element={<Wishlist />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                    </Route>
                    <Route path="/login" element={<AuthLayout />}>
                        <Route index element={<Login />}></Route>
                    </Route>
                </Routes>
            </ProductsContextProvider>
        </AuthContextProvider>
    );
}

export default App;