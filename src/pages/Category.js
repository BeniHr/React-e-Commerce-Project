import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryById } from '../data/categories';

export default function Category() {
    const [categoryData, setCategoryData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setCategoryData(getCategoryById(id));
    }, [id]);

    return (
        <>
            {categoryData && (
                <div className="category-data">
                    <h2>{categoryData.name}</h2>
                    <p>{categoryData.description}</p>
                </div>
            )}
        </>
    );
}