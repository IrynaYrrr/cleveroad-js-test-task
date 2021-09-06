const initialState = () => {
    return {
        products: [
            {
                id: 'DeeR2Foochais',
                title: 'Фисташка',
                description: 'Жареные соленые фисташки являются излюбленным лакомством большинства людей. Они обладают не только изумительным вкусом, но и большим количеством витаминов, минералов и аминокислот.',
                price: 470,
                discount: 5,
                discountDate: '2021-09-30',
                image: 'https://firebasestorage.googleapis.com/v0/b/cleveroadjstesttask.appspot.com/o/default%2F45-Fistashka-zharenaja-solenaja-SSHA-1.jpg?alt=media&token=cf5d4140-77ff-4d76-8717-7ca407bf5060',
            },
            {
                id: 'geu6Fizaiv9oo',
                title: 'Фундук жареный',
                description: 'Турецкий жареный бланшированный фундук представляет собой хорошо всем известный орех, который избавлен не только от наружной скорлупы, но и от тонкой коричневой шелухи.',
                price: 400,
                discount: 1,
                discountDate: '2021-11-01',
                image: 'https://firebasestorage.googleapis.com/v0/b/cleveroadjstesttask.appspot.com/o/default%2F64-Funduk-zharenyjj-blanshirovannyjj-Tureckijj.jpg?alt=media&token=7230f2f6-a318-4748-b6b7-1e7a1d0111c8',
            },
            {
                id: 'EejeigohB2aec',
                title: 'Макадамия в скорлупе',
                description: 'Орешки макадамия в/с в скорлупе лучше всего сохраняют свою свежесть, а вместе с ней и свои волшебные свойства. На скорлупе выполнен надрез для удобства извлечения ценнейшего ядра.',
                price: 420,
                discount: 15,
                discountDate: '2021-12-31',
                image: 'https://firebasestorage.googleapis.com/v0/b/cleveroadjstesttask.appspot.com/o/default%2F155-155-Makadamija-v-skorlupe.jpg?alt=media&token=44e5b465-f051-4380-94df-ac2d8af89b7b',
            },
            {
                id: 'ooPaijei0Yahk',
                title: 'Бразильский орех',
                description: 'Бразильский орех представляет собой высококалорийный продукт с оригинальным ореховым вкусом, обладающий ценными полезными качествами и широкой областью использования.',
                price: 520,
                discount: 0,
                discountDate: '',
                image: 'https://firebasestorage.googleapis.com/v0/b/cleveroadjstesttask.appspot.com/o/default%2F41-Brazilskijj-oreh.jpg?alt=media&token=44a6c93f-f417-4f79-82d1-b540e9ca7e87',
            },
            {
                id: 'Uleez3Noa3qua',
                title: 'Кешью жареный',
                description: 'Жареный кешью является одним из самых распространённых орехов в кулинарии. Его используют в качестве самостоятельной закуски, а также это отличный ингредиент для овощных салатов, и других блюд.',
                price: 450,
                discount: 10,
                discountDate: '2021-11-01',
                image: 'https://firebasestorage.googleapis.com/v0/b/cleveroadjstesttask.appspot.com/o/default%2F20-Keshyu-zharenyjj.jpg?alt=media&token=f4fa851e-5e71-486a-91ae-40a7be4608a1',
            },
        ],
    };
};

export default initialState;
