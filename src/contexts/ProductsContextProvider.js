import { createContext, useContext, useState } from 'react';

import { AuthContext } from './AuthContextProvider';

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
    const [productsViewed, setProductsViewed] = useState([]);
    const [productsInCart, setProductsInCart] = useState([]);
    const [productsInWishlist, setProductsInWishlist] = useState([]);

    const { isAuthenticated } = useContext(AuthContext);

    const addProductToCart = (product) => {
        if (!isAuthenticated) return;

        const productIndex = findProductIndexInList(productsInCart, product);

        if (productIndex === -1) {
            productsInCart.push(product);
        } else {
            productsInCart.splice(productIndex, 1);
        }

        setProductsInCart([...productsInCart]);
    };

    const addProductToWishlist = (product) => {
        if (!isAuthenticated) return;

        const productIndex = findProductIndexInList(productsInWishlist, product);

        if (productIndex === -1) {
            productsInWishlist.push(product);
        } else {
            productsInWishlist.splice(productIndex, 1);
        }

        setProductsInWishlist([...productsInWishlist]);
    };

    const addProductToViewed = (product) => {
        const productIndex = findProductIndexInList(productsViewed, product);

        if (productIndex === -1) {
            if (productsViewed.length === 10) {
                productsViewed.shift();
            }

            productsViewed.push(product);
        } else {
            productsViewed.splice(productIndex, 1);
            productsViewed.push(product);
        }

        setProductsViewed([...productsViewed]);
    };

    const isProductInWishlist = (product) => {
        const productIndex = findProductIndexInList(productsInWishlist, product);
        return productIndex === -1 ? false : true;
    };

    const isProductInCart = (product) => {
        const productIndex = findProductIndexInList(productsInCart, product);
        return productIndex === -1 ? false : true;
    };

    const findProductIndexInList = (list, product) => {
        const productIndex = list.findIndex(
            (listProduct) =>
                listProduct.productId === product.productId &&
                listProduct.categoryId === product.categoryId
        );

        return productIndex;
    };

    return (
        <ProductsContext.Provider
            value={{
                productsViewed,
                addProductToViewed,
                productsInCart,
                addProductToCart,
                productsInWishlist,
                addProductToWishlist,
                isProductInCart,
                isProductInWishlist,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}