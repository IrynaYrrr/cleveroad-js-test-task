const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const SET_USER = 'SET_USER';

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

const setUser = (user) => {
    let u = null;
    if (user?.email) {
        u = { email: user?.email };
    }

    return {
        type: SET_USER,
        user: u
    };
};

export default {
    LOAD_PRODUCTS,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    SET_USER,
    loadProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    setUser
};
