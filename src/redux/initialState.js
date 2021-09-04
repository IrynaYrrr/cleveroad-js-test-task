const initialState = () => {
    return {
        products: [
            {
                id: 0,
                title: 'Almond',
                description: 'Description',
                price: 500,
                discount: 20,
                discountDate: '2021-09-04',
                image: 'https://bestnuts.com.ua/Multimedia/Store/ProductsImages/45-Fistashka-zharenaja-solenaja-SSHA-1.jpg',
            },
            {
                id: 1,
                title: 'title1',
                description: 'Жареные соленые фисташки являются излюбленным лакомством большинства людей. Они обладают не только изумительным вкусом, но и большим количеством витаминов, минералов и аминокислот, которые необходимы.',
                price: 199,
                discount: 15,
                discountDate: '2021-10-01',
                image: 'https://bestnuts.com.ua/Multimedia/Store/ProductsImages/206-banan-vyal.jpg',
            },
            {
                id: 2,
                title: 'title2',
                description: 'Орешки макадамия в/с в скорлупе лучше всего сохраняют свою свежесть, а вместе с ней и свои волшебные свойства. На скорлупе выполнен надрез для удобства извлечения ценнейшего ядра. Макадамия является.',
                price: 280,
                discount: 0,
                discountDate: '',
                image: 'https://bestnuts.com.ua/Multimedia/Store/ProductsImages/264-ananas-fripsy.jpg',
            },
            {
                id: 3,
                title: 'title3',
                description: 'description3',
                price: 650,
                discount: 0,
                discountDate: '',
                image: 'https://bestnuts.com.ua/Multimedia/Store/ProductsImages/155-155-Makadamija-v-skorlupe.jpg',
            },
            {
                id: 4,
                title: 'title4',
                description: 'Кешью сырой (anacardium occidentale) представляет собой легкий и в то же время питательный продукт, насыщенный полезными элементами, который отлично подойдет для перекуса.',
                price: 150,
                discount: 0,
                discountDate: '',
                image: 'https://bestnuts.com.ua/Multimedia/Store/ProductsImages/44-Kedrovyjj-oreh-jadro-.jpg',
            },
        ],
    };
};

export default initialState;
