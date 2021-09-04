import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ProductsCards = () => {
    const classes = useStyles();

    const products = useSelector((state) => state.products);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductsCards;
