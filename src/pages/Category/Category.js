import './Category.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryById } from '../../data/categories';
import { getProductsFromCategory } from '../../data/product';
import ProductCard from '../components/ProductCard/Productcard';

export default function Category() {
    const [categoryData, setCategoryData] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setCategoryData(getCategoryById(id));
        setCategoryProducts(getProductsFromCategory(id));
    }, [id]);

    return (
        <>
            {categoryData && (
                <div className="category-data">
                    <h2 className="category-data-title">{categoryData.name}</h2>
                    <p className="category-data-description">{categoryData.description}</p>
                </div>
            )}
            <div className="category-products">
                {categoryProducts.map((product, index) => {
                    return <ProductCard key={index} categoryId={id} product={product} />;
                })}
            </div>
        </>
    );
}