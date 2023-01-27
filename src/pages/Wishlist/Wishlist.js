import './Wishlist.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';
import { ProductsContext } from '../../contexts/ProductsContextProvider';
import { getProductByCategoryIdAndProductId } from '../../data/product';
import ProductCard from '../components/ProductCard/Productcard';

export default function Wishlist() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const { productsInWishlist } = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [...productsInWishlist].reverse();
        products.forEach((product) => {
            product.data = getProductByCategoryIdAndProductId(
                product.categoryId,
                product.productId
            );
        });

        setProducts(products);
    }, [productsInWishlist]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className="wishlist-products-container">
                {products.length > 0 ? (
                    <div className="wishlist-data">
                        <h2 className="wishlist-data-title">Wishlist</h2>
                    </div>
                ) : (
                    <p>You don't have any products in your wishlist.</p>
                )}

                <div className="wishlist-products">
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