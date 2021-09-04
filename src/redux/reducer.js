import initialState from './initialState';
import actions from './actions';

const reducer = (state = initialState(), action) => {
    switch (action.type) {
        case actions.ADD_PRODUCT:
            return {...state};
        case actions.DELETE_PRODUCT:
            return {...state};
        case actions.UPDATE_PRODUCT:
            return {...state};
        default:
            return state;
    }
};

export default reducer;
