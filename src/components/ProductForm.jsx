import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NumberField from './NumberField';
import DateField from './DateField';
import ImageUpload from './ImageUpload';
import asyncActions from '../redux/asyncActions';

const useStyles = makeStyles({
    marginTop: {
        marginTop: 15,
    },
    marginBottom: {
        marginBottom: 10,
    },
});

const checkTitle = (title, setTitleError) => {
    if (title.length < 5 || title.length > 60) {
        setTitleError({ error: true, helperText: 'must be from 5 to 60' });
        return true;
    }

    return false;
};

const checkDescription = (description, setDescriptionError) => {
    if (description.length > 200) {
        setDescriptionError({ error: true, helperText: 'must be less then 200' });
        return true;
    }

    return false;
};

const checkPrice = (price, setPriceError) => {
    if (price < 0.01 || price > 99999999.99) {
        setPriceError({ error: true, helperText: 'must be from 0.01 to 99999999.99' });
        return true;
    }

    return false;
};

const checkDiscount = (discount, setDiscountError) => {
    if (!discount) {
        return false;
    }

    if (discount < 10 || discount > 90) {
        setDiscountError({ error: true, helperText: 'must be from 10 to 90' });
        return true;
    }

    return false;
};

const checkDiscountDate = (discount, discountDate, setDiscountDateError) => {
    if (!discount) {
        return false;
    }

    if (dayjs().isAfter(dayjs(discountDate))) {
        setDiscountDateError({ error: true, helperText: 'must be in future' });
        return true;
    }

    return false;
};

const ProductForm = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.product?.title ?? '');
    const [titleError, setTitleError] = useState({ error: false, helperText: '' });

    const [description, setDescription] = useState(props.product?.description ?? '');
    const [descriptionError, setDescriptionError] = useState({ error: false, helperText: '' });

    const [price, setPrice] = useState(props.product?.price ?? '');
    const [priceError, setPriceError] = useState({ error: false, helperText: '' });

    const [discount, setDiscount] = useState(props.product?.discount ?? '');
    const [discountError, setDiscountError] = useState({ error: false, helperText: '' });

    const [discountDate, setDiscountDate] = useState(props.product?.discountDate ?? null);
    const [discountDateError, setDiscountDateError] = useState({ error: false, helperText: '' });

    const [image, setImage] = useState(props.product?.image ?? '');
    const [imageFile, setImageFile] = useState(null);

    if (discountDate === '') {
        setDiscountDate(null);
    }

    const handleCancelClick = () => {
        history.push('/');
    };

    const handleSaveClick = () => {
        if (checkTitle(title, setTitleError)) {
            return;
        }

        if (checkDescription(description, setDescriptionError)) {
            return;
        }

        if (checkPrice(price, setPriceError)) {
            return;
        }

        if (checkDiscount(discount, setDiscountError)) {
            return;
        }

        if (checkDiscountDate(discount, discountDate, setDiscountDateError)) {
            return;
        }

        const product = {
            id: props.product?.id,
            title,
            description,
            price,
            discount,
            discountDate,
            image,
            imageFile
        };

        if (product.id !== undefined) {
            dispatch(asyncActions.updateProduct(product));
        } else {
            dispatch(asyncActions.createProduct(product));
        }

        history.push('/');
    };

    return (
        <Box
            className={classes.marginBottom}
        >
            <TextField
                required
                error={titleError.error}
                helperText={titleError.helperText}
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
                error={descriptionError.error}
                helperText={descriptionError.helperText}
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
                error={priceError.error}
                helperText={priceError.helperText}
                label="Цена"
                suffix=" грн"
                decimalScale={2}
                minValue={0}
                maxValue={99999999.99}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <NumberField
                error={discountError.error}
                helperText={discountError.helperText}
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
                    error={discountDateError.error}
                    helperText={discountDateError.helperText}
                    label="Скидка до"
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
                        Save
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductForm;
