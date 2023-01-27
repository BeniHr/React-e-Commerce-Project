const products = [
    {
        categoryId: 1,
        products: [
            {
                id: 1,
                name: 'Apple iPhone 12',
                description:
                    'The Apple iPhone 12 features a 6.1-inch Super Retina XDR display, dual 12MP camera system, and A14 Bionic chip. It is 5G capable and comes in various storage capacities.',
                price: '799',
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
                price: '999',
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
                price: '699',
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
                price: '769',
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
    {
        categoryId: 2,
        products: [
            {
                id: 1,
                name: 'MacBook Pro',
                description:
                    'The MacBook Pro is a powerful laptop from Apple, featuring a Retina display and the latest processors.',
                price: '1,299.99',
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481',
                properties: {
                    processor: 'Intel Core i5',
                    ram: '8 GB',
                    storage: '256 GB SSD',
                    display: 'Retina Display',
                },
            },
            {
                id: 2,
                name: 'Dell XPS 13',
                description:
                    'The Dell XPS 13 is a sleek and powerful laptop, featuring a thin bezel and the latest processors.',
                price: '999.99',
                image: 'https://s13emagst.akamaized.net/products/51468/51467730/images/res_216399bd97f7308d026c8ecc77b62a70.png?width=720&height=720&hash=926D5BF5A5432733192876C261D4E302',
                properties: {
                    processor: 'Intel Core i7',
                    ram: '16 GB',
                    storage: '512 GB SSD',
                    display: 'Full HD',
                },
            },
            {
                id: 3,
                name: 'Lenovo ThinkPad X1 Carbon',
                description:
                    'The Lenovo ThinkPad X1 Carbon is a durable and reliable laptop, perfect for business use.',
                price: '1,499.99',
                image: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-gallery-3.jpg?context=bWFzdGVyfHJvb3R8Mzg2MzZ8aW1hZ2UvanBlZ3xoOGUvaDQ5LzEwNjc0NTkyODQxNzU4LmpwZ3xlOGEyYmQyY2IxNWQ1MWQ2YTJmMjdmMTdjZjg3OGJmNGYxOTQxNGI2YTQwNDNjNGJjOWY5ODc2Njg5ZjliNTA5',
                properties: {
                    processor: 'Intel Core i5',
                    ram: '16 GB',
                    storage: '512 GB SSD',
                    display: 'Full HD',
                },
            },
            {
                id: 4,
                name: 'HP Spectre x360',
                description:
                    'The HP Spectre x360 is a versatile laptop that can be used as a traditional laptop or as a tablet.',
                price: '1,199.99',
                image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07991724.png',
                properties: {
                    processor: 'Intel Core i7',
                    ram: '8 GB',
                    storage: '256 GB SSD',
                    display: 'Full HD Touchscreen',
                },
            },
            {
                id: 5,
                name: 'Acer Aspire 5',
                description:
                    'The Acer Aspire 5 is a budget-friendly laptop with solid performance and features.',
                price: '799.99',
                image: 'https://s13emagst.akamaized.net/products/47502/47501542/images/res_629a9d29b9fac0b9e502df6e6ecd0017.jpg?width=720&height=720&hash=F698DE149EEBCE00F7FE232D0EF143CC',
                properties: {
                    processor: 'AMD Ryzen 5',
                    ram: '8 GB',
                    storage: '256 GB SSD',
                    display: 'Full HD',
                },
            },
            {
                id: 6,
                name: 'Microsoft Surface Laptop',
                description:
                    'The Microsoft Surface Laptop is a premium laptop with a sleek design and the latest processors.',
                price: '1,199.99',
                image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LEgb?ver=421a',
                properties: {
                    processor: 'Intel Core i5',
                    ram: '8 GB',
                    storage: '256 GB SSD',
                    display: 'PixelSense Display',
                },
            },
        ],
    },
    {
        categoryId: 3,
        products: [
            {
                id: 1,
                name: 'iPad Pro',
                description:
                    'The iPad Pro is a powerful tablet from Apple, featuring a large display and the latest processors.',
                price: '799.99',
                image: 'https://lcdn.mediagalaxy.ro/resize/media/catalog/product/t/a/2bd48d28d1c32adea0e55139a4e6434a/tableta_apple_ipad_pro_11_6rd_gen_2022_wi_fi_space_gray_01_b6cd1037.jpg',
                properties: {
                    processor: 'A12Z Bionic chip',
                    ram: '6 GB',
                    storage: '128 GB',
                    display: '11-inch Liquid Retina display',
                },
            },
            {
                id: 2,
                name: 'Samsung Galaxy Tab S7',
                description:
                    'The Samsung Galaxy Tab S7 is a versatile tablet featuring a large, high-resolution display and long battery life.',
                price: '649.99',
                image: 'https://www.manualdeinstructiuni.ro/thumbs/products/l/1260236-samsung-galaxy-tab-s7.jpg',
                properties: {
                    processor: 'Snapdragon 865 Plus',
                    ram: '6 GB',
                    storage: '128 GB',
                    display: '11-inch Super AMOLED display',
                },
            },
            {
                id: 3,
                name: 'Amazon Fire HD 10',
                description:
                    'The Amazon Fire HD 10 is a budget-friendly tablet with a large display and Alexa built-in.',
                price: '149.99',
                image: 'https://static.quickmobile.ro/cs-photos/products/original/fire-hd-10-2019-32gb-negru_10062592_1_1579533454.jpg',
                properties: {
                    processor: 'MediaTek Helio P60T',
                    ram: '2 GB',
                    storage: '32 GB',
                    display: '10.1-inch HD display',
                },
            },
            {
                id: 4,
                name: 'Microsoft Surface Go 2',
                description:
                    'The Microsoft Surface Go 2 is a lightweight and portable tablet with a long battery life.',
                price: '399.99',
                image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4o6Z8?ver=bc5ag',
                properties: {
                    processor: 'Intel Pentium Gold',
                    ram: '4 GB',
                    storage: '64 GB',
                    display: '10.5-inch PixelSense Display',
                },
            },
            {
                id: 5,
                name: 'Lenovo Tab P11 Pro',
                description:
                    'The Lenovo Tab P11 Pro is a powerful tablet with a high-resolution display and long battery life.',
                price: '449.99',
                image: 'https://s13emagst.akamaized.net/products/51114/51113525/images/res_0912bb0eeb3576ca0434a076182a556c.jpg',
                properties: {
                    processor: 'Snapdragon 662',
                    ram: '4 GB',
                    storage: '64 GB',
                    display: '11.5-inch IPS display',
                },
            },
            {
                id: 6,
                name: 'Apple iPad Air',
                description:
                    'The Apple iPad Air is a powerful tablet with a sleek design and the latest processors.',
                price: '599.99',
                image: 'https://lcdn.altex.ro/resize/media/catalog/product/T/a/2bd48d28d1c32adea0e55139a4e6434a/Tableta_APPLE_iPad_Air_5_Purple_2_.jpg',
                properties: {
                    processor: 'A14 Bionic chip',
                    ram: '4 GB',
                    storage: '64 GB',
                },
            },
        ],
    },
    {
        categoryId: 4,
        products: [
            {
                id: 1,
                name: 'PlayStation 5',
                description:
                    'The PlayStation 5 is a powerful gaming console with a fast SSD and advanced graphics.',
                price: '499.99',
                image: 'https://static.orangeromania.ro/webshop-images/shs_pst2800901/sony_consola_playstation_5_l58049_4.png',
                properties: {
                    processor: 'AMD Zen 2',
                    ram: '16 GB',
                    storage: '825 GB SSD',
                    display: '4K and 8K',
                },
            },
            {
                id: 2,
                name: 'Xbox Series X',
                description:
                    'The Xbox Series X is a powerful gaming console with fast load times and advanced graphics.',
                price: '499.99',
                image: 'https://www.gamers.ro/content/product_instances2/845684/xboxseries-xbox-series-x-1tb.jpg',
                properties: {
                    processor: 'Custom Zen 2',
                    ram: '16 GB',
                    storage: '1 TB SSD',
                    display: '4K and 8K',
                },
            },
            {
                id: 3,
                name: 'Nintendo Switch',
                description:
                    'The Nintendo Switch is a versatile gaming console that can be used as a traditional console or as a portable device.',
                price: '299.99',
                image: 'https://cdn-media.carrefour.ro/media/catalog/product/cache/b8d1b6d249a72cf17aaedcba7bc307bc/19/4/6/46500736_1_.png',
                properties: {
                    processor: 'NVIDIA Tegra X1',
                    ram: '4 GB',
                    storage: '32 GB',
                    display: '720p',
                },
            },
            {
                id: 4,
                name: 'ASUS ROG Strix GL12CX',
                description:
                    'The ASUS ROG Strix GL12CX is a powerful gaming PC with a fast processor and advanced graphics.',
                price: '1,999.99',
                image: 'https://static3.evomag.ro/img?file=products%2F3783%2F3783956%2F1584350228Calculator+Sistem+PC+Asus+Rog+Strix+GL12CX-RO009D+%28Procesor+Intel%C2%AE+Core%E2%84%A2+i7-9700K+%2812M+Cache%2C+up+to+4.90+GHz%29%2C+Coffee+Lake%2C+8GB%2C+1TB+HDD+%407200RPM+%2B+512GB+SSD%2C+nVidia+GeForce+RTX+2070+%408GB%2C+Negru%291.jpg&width=600&height=600&extend=white',
                properties: {
                    processor: 'Intel Core i9',
                    ram: '32 GB',
                    storage: '1 TB SSD + 2 TB HDD',
                    display: 'NVIDIA GeForce RTX 2080 Ti',
                },
            },
            {
                id: 5,
                name: 'Alienware Aurora R9',
                description:
                    'The Alienware Aurora R9 is a high-performance gaming PC with a fast processor and advanced graphics.',
                price: '2,499.99',
                image: 'https://lorimax.ro/wp-content/uploads/2020/07/4-1.jpg',
                processor: 'Intel Core i9',
                properties: {
                    ram: '32 GB',
                    storage: '1 TB SSD + 2 TB HDD',
                    display: 'NVIDIA GeForce RTX 2080 Ti',
                },
            },
            {
                id: 6,
                name: 'MSI Trident 3 9SI-447US',
                description:
                    'The MSI Trident 3 9SI-447US is a compact gaming PC with a fast processor and advanced graphics.',
                price: '1,499.99',
                image: 'https://i5.walmartimages.com/asr/69e4535f-1550-4dc9-9368-6a6854b81f06_1.9525b6071a625fdd092a62282f7635fd.jpeg',
                properties: {
                    processor: 'Intel Core i7',
                    ram: '16 GB',
                },
            },
        ],
    },
    {
        categoryId: 5,
        products: [
            {
                id: 1,
                name: 'Apple Watch Series 6',
                description:
                    'The latest version of the popular smartwatch from Apple, featuring a new S6 chip, ECG and blood oxygen monitoring, and a always-on Retina display.',
                price: '399',
                image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/FG133?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1614983667000',
                properties: {
                    display: 'Always-on Retina display',
                    sensors: 'Heart rate, ECG, blood oxygen, accelerometer, gyroscope',
                    compatibility: 'iPhone 6s or later, running iOS 14 or later',
                },
            },
            {
                id: 2,
                name: 'Fitbit Charge 4',
                description:
                    'A fitness tracker with GPS, heart rate monitoring, and up to 7 days of battery life. Includes features such as active zone minutes, sleep tracking, and mobile payments.',
                price: '149.95',
                image: 'https://s13emagst.akamaized.net/products/29284/29283443/images/res_94369fd8c9ad428fc32fea2bdb2407e5.jpg',
                properties: {
                    sensors: 'Heart rate, GPS, accelerometer, altimeter, ambient light',
                    battery: 'Up to 7 days',
                    compatibility: 'Android, iOS, and Windows devices',
                },
            },
            {
                id: 3,
                name: 'Samsung Galaxy Watch Active 2',
                description:
                    'A smartwatch with advanced fitness tracking, GPS, and a customizable watch face. Also includes Bixby voice control and Samsung Pay.',
                price: '279.99',
                image: 'https://lcdn.altex.ro/resize/media/catalog/product/S/M/2bd48d28d1c32adea0e55139a4e6434a/SMWSACTIVE244CS_4_34351738.jpg',
                properties: {
                    display: 'AMOLED display',
                    sensors: 'Heart rate, GPS, accelerometer, gyroscope, barometer',
                    compatibility: 'Android, iOS',
                },
            },
            {
                id: 4,
                name: 'Withings Steel HR Sport',
                description:
                    'A hybrid smartwatch with a 25-day battery life and continuous heart rate monitoring. Includes fitness tracking and connected GPS.',
                price: '199.95',
                image: 'https://s13emagst.akamaized.net/products/17134/17133184/images/res_c269f1186988806e98c75521d938323c.jpg',
                properties: {
                    sensors: 'Heart rate, GPS',
                    battery: 'Up',
                },
            },
        ],
    },
];

export function getProductsFromCategory(categoryId) {
    const category = products.find((category) => category.categoryId === parseInt(categoryId));
    return category ? category.products : [];
}

export function getProductByCategoryIdAndProductId(categoryId, productId) {
    const category = products.find((category) => category.categoryId === parseInt(categoryId));
    return category ? category.products.find((product) => product.id === parseInt(productId)) : [];
}

export default products;