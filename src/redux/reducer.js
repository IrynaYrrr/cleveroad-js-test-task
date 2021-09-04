import initialState from './initialState';
import actions from './actions';
import comm from './comm';

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case actions.CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case actions.DELETE_PRODUCT:
            return { ...state, products: state.products.filter((p) => p.id !== action.payload.id) };
        case actions.UPDATE_PRODUCT:
            return { ...state, products: comm.getEditedProducts(state, action) };
        default:
            return state;
    }
};

export default reducer;
