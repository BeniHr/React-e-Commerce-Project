import categories from '../data/categories';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import Hero from './components/Hero/Hero';
import ProductsViewed from './components/ProductsViewed/ProductsViewed';

export default function Home() {
    return (
        <>
            <Hero />
            {categories.map((category, index) => {
                return <CategoryProducts key={index} categoryId={category.id} />;
            })}
            <ProductsViewed />
        </>
    );
}