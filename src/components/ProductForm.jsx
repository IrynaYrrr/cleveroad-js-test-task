import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NumberField from './NumberField';
import DateField from './DateField';
import ImageUpload from './ImageUpload';
import actions from '../redux/actions';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    marginTop: {
        marginTop: 15,
    },
    marginBottom: {
        marginBottom: 10,
    },
});

const ProductForm = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.product?.title ?? '');
    const [description, setDescription] = useState(props.product?.description ?? '');
    const [price, setPrice] = useState(props.product?.price ?? '');
    const [discount, setDiscount] = useState(props.product?.discount ?? '');
    const [discountDate, setDiscountDate] = useState(props.product?.discountDate ?? null);
    const [image, setImage] = useState(props.product?.image ?? '');
    const [imageFile, setImageFile] = useState(null);

    if (discountDate === '') {
        setDiscountDate(null);
    }

    const handleCancelClick = () => {
        history.push('/');
    };

    const handleSaveClick = () => {
        const product = {
            id: props.product?.id,
            title,
            description,
            price,
            discount,
            discountDate,
            image
        };

        if (product.id !== undefined) {
            dispatch(actions.updateProduct(product));
        } else {
            dispatch(actions.createProduct(product));
        }

        history.push('/');
    };

    return (
        <Box
            className={classes.marginBottom}
        >
            <TextField
                required
                label="Наименование товара"
                fullWidth
                margin="normal"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={classes.marginBottom}
            />
            <ImageUpload
                image={image}
                setImage={setImage}
                imageFile={imageFile}
                setImageFile={setImageFile}
            />
            <TextField
                label="Описание товара"
                fullWidth
                multiline
                margin="normal"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <NumberField
                required
                label="Цена"
                suffix=" грн"
                decimalScale={2}
                minValue={0}
                maxValue={99999999.99}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <NumberField
                label="Процент скидки"
                suffix=" %"
                decimalScale={0}
                minValue={0}
                maxValue={99}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />
            <Box
                className={classes.marginTop}
            >
                <DateField
                    label="Выбрать дату"
                    format="dd.MM.yyyy"
                    value={discountDate}
                    onChange={(e) => setDiscountDate(e.target.value)}
                />
            </Box>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={classes.marginTop}
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSaveClick}
                    >
                        Сохранить
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCancelClick}
                    >
                        Отменить
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductForm;
