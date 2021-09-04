import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import MenuBar from './MenuBar';
import ProductForm from './ProductForm';

const ProductEdit = (props) => {
    const id = Number(props.match.params.id);
    const product = useSelector((state) => state.products.find((p) => p.id === id));

    return (
        <>
            <MenuBar />
            <br />
            <Container maxWidth="md">
                <ProductForm product={product} />
            </Container>
        </>
    );
};

export default ProductEdit;