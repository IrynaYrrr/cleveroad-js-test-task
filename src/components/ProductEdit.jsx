import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import ProductForm from './ProductForm';

const ProductEdit = () => {

    return (
        <>
            <MenuBar />
            <br />
            <Container maxWidth="md">
                <ProductForm />
            </Container>
        </>
    );
};

export default ProductEdit;
