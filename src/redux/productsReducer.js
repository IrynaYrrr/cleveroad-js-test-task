import actions from './actions';
import comm from './comm';

const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actions.LOAD_PRODUCTS:
            return { ...state, products: [...action.products] };
        case actions.CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.product] };
        case actions.DELETE_PRODUCT:
            return { ...state, products: state.products.filter((p) => p.id !== action.product.id) };
        case actions.UPDATE_PRODUCT:
            return { ...state, products: comm.getEditedProducts(state, action) };
        default:
            return state;
    }
};

export default productsReducer;
