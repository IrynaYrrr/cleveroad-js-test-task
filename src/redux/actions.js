const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const createProduct = (payload) => {
    return {
        type: CREATE_PRODUCT,
        payload: { ...payload, id: Date.now() }
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
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    createProduct,
    deleteProduct,
    updateProduct,
};
