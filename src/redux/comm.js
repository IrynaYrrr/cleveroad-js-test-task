const getEditedProducts = (state, action) => {
    const products = state.products.map((p) => {
        if (p.id === action.payload.id) {
            p = action.payload;
        }
        return p;
    });

    return products;
};

export default { getEditedProducts };