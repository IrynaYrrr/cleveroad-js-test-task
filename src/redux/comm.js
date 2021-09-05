const getEditedProducts = (state, action) => {
    const products = state.products.map((p) => {
        if (p.id === action.product.id) {
            p = action.product;
        }
        return p;
    });

    return products;
};

export default { getEditedProducts };
