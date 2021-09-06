import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
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
    product.id = Date.now();

    if (product.imageFile) {
        return (dispatch) => {
            uploadImage(product.imageFile).then((url) => {
                product.image = url;
                delete product.imageFile;
                addDoc(collection(getFirestore(), 'products111'), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else if (!product.image) {
        delete product.imageFile;
        return (dispatch) => {
            getDefaultImage().then((url) => {
                product.image = url;
                addDoc(collection(getFirestore(), 'products111'), product);
            }).then(() => {
                dispatch(actions.createProduct(product));
            });
        };
    } else {
        delete product.imageFile;
        return (dispatch) => {
            addDoc(collection(getFirestore(), 'products111'), product)
                .then(() => {
                    dispatch(actions.createProduct(product));
                });
        };
    }
};

export default { loadProducts, createProduct };