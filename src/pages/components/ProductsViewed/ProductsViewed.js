import './ProductsViewed.css';

import { useContext, useEffect, useState } from 'react';

import { ProductsContext } from '../../../contexts/ProductsContextProvider';
import { getProductByCategoryIdAndProductId } from '../../../data/product';
import ProductCard from '../ProductCard/Productcard';

export default function ProductsViewed() {
    const { productsViewed } = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [...productsViewed].reverse();
        products.forEach((product) => {
            product.data = getProductByCategoryIdAndProductId(
                product.categoryId,
                product.productId
            );
        });

        setProducts(products);
    }, [productsViewed]);

    return (
        <div className="recent-products-container">
            {products.length > 0 && (
                <div className="recent-data">
                    <h2 className="recent-data-title">Recently Viewed</h2>
                </div>
            )}

            <div className="recent-products">
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
    );
}