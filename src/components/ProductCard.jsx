import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { getDaysHumanize } from '../utils/days';
import { useDispatch } from 'react-redux';
import asyncActions from '../redux/asyncActions';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#e2f1f8',
    },
    title: {
        minHeight: 64,
    },
    description: {
        minHeight: 195,
    },
    icon: {
        color: '#f57f17',
    },
    iconInvisible: {
        color: '#e2f1f8',
    },
    media: {
        height: 140,
    },
    price: {
        textDecoration: 'none',
    },
    priceThrough: {
        textDecoration: 'line-through',
    },
});

const ProductCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const { product } = props;

    const getDiscount = () => {
        if (product.discount) {
            return product.price - Math.round(product.price / 100 * product.discount);
        }
        return '';
    };

    const getDiscountDays = () => {
        if (product.discountDate) {
            const days = dayjs(product.discountDate).diff(dayjs(), 'days') + 1;
            if (days > 0) {
                return `${days} ${getDaysHumanize(days)}`;
            }
        }
        return '';
    };

    const deleteProduct = () => {
        dispatch(asyncActions.deleteProduct(product));
    };

    const editProduct = () => {
        history.push(`/edit/${product.id}`);
    };

    const discount = getDiscount();
    const discountDays = getDiscountDays();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {discount && discountDays ?
                    <LocalOfferIcon className={classes.icon} fontSize="large" />
                    :
                    <LocalOfferIcon className={classes.iconInvisible} fontSize="large" />
                }
                <CardMedia
                    className={classes.media}
                    image={product.image}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {discount && discountDays ?
                    <Typography gutterBottom variant="h6" component="h2">
                        {discount} ??????/????
                    </Typography>
                    : null
                }
                {discount && discountDays ?
                    <Typography gutterBottom className={classes.priceThrough}>
                        {product.price} ??????/????
                    </Typography>
                    :
                    <Typography gutterBottom variant="h6" className={classes.price}>
                        {product.price} ??????/????
                    </Typography>
                }
            </CardActions>
            <CardActions>
                <Typography variant="body1" color="textSecondary" component="p">
                    {discount && discountDays ? `*???????????? ?????? ${discountDays}` : '\u00A0'}
                </Typography>
            </CardActions>
            <CardActions>
                <Button size="small" color="primary" onClick={editProduct}>
                    ??????????????????????????
                </Button>
                <Button size="small" color="primary" onClick={deleteProduct}>
                    ??????????????
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;