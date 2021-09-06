import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import App from './App';
import asyncActions from './redux/asyncActions';
import './index.css';

initializeApp({
    apiKey: 'AIzaSyDVwVXAOHUKLhP5jy26DNQd0daDwhKpGhU',
    authDomain: 'cleveroadjstesttask.firebaseapp.com',
    projectId: 'cleveroadjstesttask',
    storageBucket: 'cleveroadjstesttask.appspot.com',
    messagingSenderId: '390461714765',
    appId: '1:390461714765:web:62b826debdffcee9ae0704'
});

getAuth();

store.dispatch(asyncActions.loadProducts());

ReactDOM.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>,
    document.getElementById('root')
);
