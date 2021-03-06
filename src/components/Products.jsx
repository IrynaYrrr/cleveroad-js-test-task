import Container from '@material-ui/core/Container';
import ProductsCards from './ProductsCards';
import MenuBar from './MenuBar';

const Products = () => {
    return (
        <>
            <MenuBar />
            <br />
            <Container maxWidth="lg">
                <ProductsCards />
            </Container>
        </>
    );
};

export default Products;
