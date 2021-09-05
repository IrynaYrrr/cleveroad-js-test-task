import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import actions from './actions';

const uploadImage = async (imageFile) => {
    const storage = getStorage();
    const storageRef = ref(storage, imageFile.file.name);
    await uploadBytes(storageRef, imageFile.file);
    const url = await getDownloadURL(storageRef);
    return url;
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

export default { createProduct };
