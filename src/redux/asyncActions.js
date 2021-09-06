import { getFirestore, collection, getDocs, addDoc, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import actions from './actions';

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
        getDocs(collection(getFirestore(), 'products111'))
            .then((querySnapshot) => {
                const products = [];

                querySnapshot.forEach((doc) => {
                    products.push(doc.data());
                });

                dispatch(actions.loadProducts(products));
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
                // addDoc(collection(getFirestore(), 'products111', 'DC'), product);
                setDoc(doc(getFirestore(), 'products111', product.id), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else if (!product.image) {
        delete product.imageFile;
        return (dispatch) => {
            getDefaultImage().then((url) => {
                product.image = url;
                // addDoc(collection(getFirestore(), 'products111', 'DC'), product);
                setDoc(doc(getFirestore(), 'products111', product.id), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else {
        delete product.imageFile;
        return (dispatch) => {
            // addDoc(collection(getFirestore(), 'products111', 'DC'), product)
            setDoc(doc(getFirestore(), 'products111', product.id), product)
                .then(() => {
                    dispatch(actions.createProduct(product));
                });
        };
    }
};

const deleteProduct = (product) => {
    return (dispatch) => {
        deleteDoc(doc(getFirestore(), 'products111', product.id), product)
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
                updateDoc(doc(getFirestore(), 'products111', product.id), product);
            }).then(() => {
                dispatch(actions.updateProduct(product));
            });
        };
    } else {
        delete product.imageFile;
        return (dispatch) => {
            updateDoc(doc(getFirestore(), 'products111', product.id), product)
                .then(() => {
                    dispatch(actions.updateProduct(product));
                });
        };
    }
};

export default { loadProducts, createProduct, deleteProduct, updateProduct };
