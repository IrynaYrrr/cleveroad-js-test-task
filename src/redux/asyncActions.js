import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import actions from './actions';
import initialState from './initialState';

const productsCollection = 'products111';

const uploadImage = async (imageFile) => {
    const storage = getStorage();
    const storageRef = ref(storage, imageFile.file.name);
    await uploadBytes(storageRef, imageFile.file);
    const url = await getDownloadURL(storageRef);
    return url;
};

const getDefaultImage = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, 'default/noimage.jpg');
    const url = await getDownloadURL(storageRef);
    return url;
};

const loadProducts = () => {
    return (dispatch) => {
        getDocs(collection(getFirestore(), productsCollection))
            .then((querySnapshot) => {
                const products = [];

                querySnapshot.forEach((doc) => {
                    products.push(doc.data());
                });

                dispatch(actions.loadProducts(products));
            });
    };
};

const restoreProducts = () => {
    const deletePromises = [];
    const createPromises = [];

    return (dispatch) => {
        getDocs(collection(getFirestore(), productsCollection))
            .then((querySnapshot) => {
                querySnapshot.forEach((q) => {
                    deletePromises.push(deleteDoc(doc(getFirestore(), productsCollection, q.id)));
                });
                return Promise.all(deletePromises);
            })
            .then(() => {
                const products = initialState().products;
                products.forEach((p) => {
                    createPromises.push(setDoc(doc(getFirestore(), productsCollection, p.id), p));
                });
                return Promise.all(createPromises);
            })
            .then(() => {
                dispatch(loadProducts());
            });
    };
};

const createProduct = (product) => {
    product.id = Date.now().toString();

    if (product.imageFile) {
        return (dispatch) => {
            uploadImage(product.imageFile).then((url) => {
                product.image = url;
                delete product.imageFile;
                setDoc(doc(getFirestore(), productsCollection, product.id), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else if (!product.image) {
        delete product.imageFile;
        return (dispatch) => {
            getDefaultImage().then((url) => {
                product.image = url;
                setDoc(doc(getFirestore(), productsCollection, product.id), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else {
        delete product.imageFile;
        return (dispatch) => {
            setDoc(doc(getFirestore(), productsCollection, product.id), product)
                .then(() => {
                    dispatch(actions.createProduct(product));
                });
        };
    }
};

const deleteProduct = (product) => {
    return (dispatch) => {
        deleteDoc(doc(getFirestore(), productsCollection, product.id))
            .then(() => {
                dispatch(actions.deleteProduct(product));
            });
    };
};

const updateProduct = (product) => {
    if (product.imageFile) {
        return (dispatch) => {
            uploadImage(product.imageFile).then((url) => {
                product.image = url;
                delete product.imageFile;
                updateDoc(doc(getFirestore(), productsCollection, product.id), product);
            }).then(() => {
                dispatch(actions.updateProduct(product));
            });
        };
    } else {
        delete product.imageFile;
        return (dispatch) => {
            updateDoc(doc(getFirestore(), productsCollection, product.id), product)
                .then(() => {
                    dispatch(actions.updateProduct(product));
                });
        };
    }
};

export default { loadProducts, restoreProducts, createProduct, deleteProduct, updateProduct };
