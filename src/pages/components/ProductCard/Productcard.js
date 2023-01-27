import './ProductCard.css';

import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function ProductCard({ categoryId, product }) {
    return (
        <div className="product-card">
            <Link to={`/category/${categoryId}/product/${product.id}`}>
                <img className="image" src={product.image} />
            </Link>
            <h2 className="name">{product.name}</h2>
            <p className="price">${product.price}</p>
            <div className="buttons">
                <button className="add-to-wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="add-to-cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
}