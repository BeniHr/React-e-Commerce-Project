import './Product.css';

import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContextProvider';
import { ProductsContext } from '../../contexts/ProductsContextProvider';
import { getProductByCategoryIdAndProductId } from '../../data/product';
import ProductsViewed from '../components/ProductsViewed/ProductsViewed';

export default function Product() {
    const { isAuthenticated } = useContext(AuthContext);
    const {
        addProductToViewed,
        isProductInWishlist,
        isProductInCart,
        addProductToCart,
        addProductToWishlist,
        productsInWishlist,
        productsInCart,
    } = useContext(ProductsContext);
    const { categoryId, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [productProperties, setProductProperties] = useState([]);

    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        if (product) {
            setIsInCart(isProductInCart({ categoryId, productId: product.id }));
            setIsInWishlist(isProductInWishlist({ categoryId, productId: product.id }));
        }
    }, [productsInWishlist, productsInCart]);

    useEffect(() => {
        addProductToViewed({ categoryId, productId });
        setProduct(getProductByCategoryIdAndProductId(categoryId, productId));
    }, [categoryId, productId]);

    useEffect(() => {
        if (!product) {
            return;
        }

        let properties = [];
        Object.entries(product.properties).forEach(([key, value]) => {
            properties.push({ key, value });
        });
        setProductProperties(properties);
    }, [product]);

    return (
        <>
            {product && (
                <>
                    <div className="product-info">
                        <img className="product-image" src={product.image} />
                        <div className="product-data">
                            <h1 className="product-name">{product.name}</h1>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price}</p>
                            {isAuthenticated && (
                                <div className="product-buttons">
                                    <button
                                        className="product-add-to-wishlist"
                                        onClick={() =>
                                            addProductToWishlist({
                                                categoryId,
                                                productId: product.id,
                                            })
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={isInWishlist ? faHeartBroken : faHeart}
                                        />
                                    </button>
                                    <button
                                        className="product-add-to-cart"
                                        onClick={() =>
                                            addProductToCart({ categoryId, productId: product.id })
                                        }
                                    >
                                        {isInCart ? 'Remove from cart' : 'Add to cart'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="product-properties">
                        <h2 className="product-section-title">Properties</h2>
                        <table className="product-properties-table">
                            <thead></thead>
                            <tbody>
                                {productProperties.map((property, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="product-property">{property.key}</td>
                                            <td className="product-property-value">
                                                {property.value}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <ProductsViewed />
                </>
            )}
        </>
    );
}