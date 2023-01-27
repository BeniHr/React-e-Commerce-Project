import './CategoryProducts.css';

import { useEffect, useState } from 'react';

import { getCategoryById } from '../../../data/categories';
import { getProductsFromCategory } from '../../../data/product';
import ProductCard from '../ProductCard/Productcard';

export default function CategoryProducts({ categoryId }) {
    const [categoryData, setCategoryData] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        setCategoryData(getCategoryById(categoryId));
        setCategoryProducts(getProductsFromCategory(categoryId));
    }, [categoryId]);

    return (
        <div className="category-products-container">
            {categoryProducts.length > 0 && (
                <>
                    {categoryData && (
                        <div className="category-data">
                            <h2 className="category-data-title">{categoryData.name}</h2>
                        </div>
                    )}
                    <div className="category-products">
                        {categoryProducts.map((product, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    categoryId={categoryId}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}