import './Cart.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';
import { ProductsContext } from '../../contexts/ProductsContextProvider';
import { getProductByCategoryIdAndProductId } from '../../data/product';
import ProductCard from '../components/ProductCard/Productcard';

export default function Cart() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const { productsInCart } = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [...productsInCart].reverse();
        products.forEach((product) => {
            product.data = getProductByCategoryIdAndProductId(
                product.categoryId,
                product.productId
            );
        });

        setProducts(products);
    }, [productsInCart]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className="cart-products-container">
                {products.length > 0 ? (
                    <div className="cart-data">
                        <h2 className="cart-data-title">Cart</h2>
                    </div>
                ) : (
                    <p>You don't have any products in your cart.</p>
                )}

                <div className="cart-products">
                    {products.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                product={product.data}
                                categoryId={product.categoryId}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}