import './Product.css';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductByCategoryIdAndProductId } from '../../data/products';

export default function Product() {
    const { categoryId, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [productProperties, setProductProperties] = useState([]);

    useEffect(() => {
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
                            <div className="product-buttons">
                                <button className="product-add-to-wishlist">
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <button className="product-add-to-cart">Add to cart</button>
                            </div>
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
                </>
            )}
        </>
    );
}