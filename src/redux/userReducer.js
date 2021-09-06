import actions from './actions';

const userReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export default userReducer;
