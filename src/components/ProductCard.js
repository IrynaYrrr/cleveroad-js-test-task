import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#e2f1f8',
    },
    icon: {
        color: '#f57f17',
    },
    media: {
        height: 140,
    },
    price: {
        textDecoration: "line-through",
    }
});

const ProductCard = () => {
    const classes = useStyles();

    return (
        <Badge color="primary">
            <Card className={classes.root}>
                <CardActionArea>

                    <LocalOfferIcon className={classes.icon} fontSize="large"/>
                    <CardMedia
                        className={classes.media}
                        image="/assets/almond.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Миндаль
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Описание
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography gutterBottom variant="h6" component="h2">
                        400 грн/кг
                    </Typography>
                    <Typography gutterBottom className={classes.price}>
                        500 грн/кг
                    </Typography>
                </CardActions>
                <CardActions>
                    <Typography variant="body1" color="textSecondary" component="p">
                        *Скидка ещё 2 дня
                    </Typography>
                </CardActions>
                <CardActions>
                    <Button size="small" color="primary">
                        Редактировать
                    </Button>
                    <Button size="small" color="primary">
                        Удалить
                    </Button>
                </CardActions>
            </Card>
        </Badge>
    );
}

export default ProductCard;