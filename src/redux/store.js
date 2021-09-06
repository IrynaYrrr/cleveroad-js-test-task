import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './productsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    productsReducer,
    userReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
