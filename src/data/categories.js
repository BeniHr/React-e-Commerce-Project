const categories = [
    {
        id: 1,
        name: 'Smartphones',
        description: 'A collection of the latest and greatest smartphones on the market.',
    },
    {
        id: 2,
        name: 'Laptops',
        description: 'A wide range of laptops for all needs and budgets.',
    },
    {
        id: 3,
        name: 'Tablets',
        description: 'The latest tablets for entertainment, productivity, and more.',
    },
    {
        id: 4,
        name: 'Gaming',
        description: 'A selection of gaming consoles, accessories, and games.',
    },
    {
        id: 5,
        name: 'Wearable Technology',
        description:
            'The latest wearables for fitness tracking, smartwatch functionality and more.',
    },
];

export const getCategoryById = (id) => {
    return categories.find((category) => category.id === parseInt(id));
};

export default categories;