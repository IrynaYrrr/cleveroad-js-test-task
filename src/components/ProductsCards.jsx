import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from "./ProductCard";

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

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
                <Grid item xs>
                    <ProductCard />
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductsCards;
