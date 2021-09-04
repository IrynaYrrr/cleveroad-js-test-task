const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const addProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    };
};

const deleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    };
};

const updateProduct = (payload) => {
    return {
        type: UPDATE_PRODUCT,
        payload
    };
};

export default {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    addProduct,
    deleteProduct,
    updateProduct,
};
