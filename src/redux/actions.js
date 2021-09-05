const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    };
};

const createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        product
    };
};

const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        product
    };
};

const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    };
};

export default {
    LOAD_PRODUCTS,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    loadProducts,
    createProduct,
    deleteProduct,
    updateProduct,
};
