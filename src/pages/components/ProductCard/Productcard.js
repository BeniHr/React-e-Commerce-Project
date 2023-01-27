import './ProductCard.css';

import { faHeart, faHeartBroken, faShopLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContextProvider';
import { ProductsContext } from '../../../contexts/ProductsContextProvider';

export default function ProductCard({ categoryId, product }) {
    const { isAuthenticated } = useContext(AuthContext);
    const {
        isProductInWishlist,
        isProductInCart,
        addProductToCart,
        addProductToWishlist,
        productsInWishlist,
        productsInCart,
    } = useContext(ProductsContext);

    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        setIsInCart(isProductInCart({ categoryId, productId: product.id }));
        setIsInWishlist(isProductInWishlist({ categoryId, productId: product.id }));
    }, [productsInCart, productsInWishlist]);

    return (
        <div className="product-card">
            <Link to={`/category/${categoryId}/product/${product.id}`}>
                <img className="image" src={product.image} />
            </Link>
            <h2 className="name">{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
            {isAuthenticated && (
                <div className="buttons">
                    <button
                        className="add-to-wishlist"
                        onClick={() => addProductToWishlist({ categoryId, productId: product.id })}
                    >
                        <FontAwesomeIcon icon={isInWishlist ? faHeartBroken : faHeart} />
                    </button>
                    <button className="add-to-cart">
                        <FontAwesomeIcon
                            icon={isInCart ? faShopLock : faShoppingCart}
                            onClick={() => addProductToCart({ categoryId, productId: product.id })}
                        />
                    </button>
                </div>
            )}
        </div>
    );
}