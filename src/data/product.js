const products = [
    {
        categoryId: 1,
        products: [
            {
                id: 1,
                name: 'Apple iPhone 12',
                description:
                    'The Apple iPhone 12 features a 6.1-inch Super Retina XDR display, dual 12MP camera system, and A14 Bionic chip. It is 5G capable and comes in various storage capacities.',
                price: 799,
                image: 'https://lcdn.altex.ro/resize/media/catalog/product/A/p/2bd48d28d1c32adea0e55139a4e6434a/Apple-iPhone-12-5G-Black_2.jpg',
                properties: {
                    storage: '64GB',
                    color: 'Black',
                    operating_system: 'iOS 14',
                    camera: 'Dual 12MP (Wide and Ultra Wide)',
                    display: '6.1-inch Super Retina XDR display',
                    battery_life: 'Up to 17 hours of video playback',
                    processor: 'A14 Bionic chip',
                    connectivity: '5G capable',
                },
            },
            {
                id: 2,
                name: 'Samsung Galaxy S21',
                description:
                    'The Samsung Galaxy S21 is a flagship smartphone with a 6.2-inch Dynamic AMOLED 2X display, triple camera system, and Snapdragon 888 processor. It also features 5G connectivity and an all-day battery.',
                price: 999,
                image: 'https://images.samsung.com/is/image/samsung/p6pim/ro/galaxy-s21/gallery/ro-galaxy-s21-5g-g991-sm-g991bzadeue-359305026',
                properties: {
                    storage: '128GB',
                    color: 'Phantom Gray',
                    operating_system: 'Android 11',
                    camera: 'Triple 12MP (Wide, Ultra Wide, Telephoto)',
                    display: '6.2-inch Dynamic AMOLED 2X display',
                    battery_life: 'All-day battery',
                    processor: 'Snapdragon 888',
                    connectivity: '5G capable',
                },
            },
            {
                id: 3,
                name: 'Google Pixel 5',
                description:
                    'The Google Pixel 5 is a high-end smartphone with a 6-inch OLED display, dual rear camera, and Snapdragon 765G processor. It also features 5G connectivity, and a water and dust resistance rating of IP68',
                price: 699,
                image: 'https://m.media-amazon.com/images/I/81-fNmQqlLL._AC_SL1500_.jpg',
                properties: {
                    storage: '128GB',
                    color: 'Just Black',
                    operating_system: 'Android 11',
                    camera: 'Dual 12.2 MP (Wide, Ultrawide)',
                    display: '6-inch OLED display',
                    battery_life: 'All-day battery',
                    processor: 'Snapdragon 765G',
                    connectivity: '5G capable',
                    ip_rating: 'IP68',
                },
            },
            {
                id: 4,
                name: 'OnePlus 9',
                description:
                    'The OnePlus 9 is a flagship smartphone with a 6.55-inch AMOLED display, triple camera system, and Snapdragon 888 processor. It also features fast charging, 5G connectivity and an all-day battery.',
                price: 769,
                image: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Arcticsky_2080a_euna.png',
                properties: {
                    storage: '128GB',
                    color: 'Arctic Sky',
                    operating_system: 'OxygenOS 11 based on Android 11',
                    camera: 'Triple 48 MP (Wide, Ultrawide, Telephoto)',
                    display: '6.55-inch AMOLED display',
                    battery_life: 'All-day battery',
                    processor: 'Snapdragon 888',
                },
            },
        ],
    },
];

export function getProductsFromCategory(categoryId) {
    const category = products.find((category) => category.categoryId === parseInt(categoryId));
    return category.products;
}

export function getProductByCategoryIdAndProductId(categoryId, productId) {
    const category = products.find((category) => category.categoryId === parseInt(categoryId));
    return category.products.find((product) => product.id === parseInt(productId));
}

export default products;