import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#e2f1f8',
    },
    media: {
        height: 140,
    },
});

const ProductCard = ()=> {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
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
                <Button size="small" color="primary">
                    Редактировать
                </Button>
                <Button size="small" color="primary">
                     Удалить
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;