import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import NumberField from './NumberField';
import DateField from './DateField';

const ProductForm = (props) => {
    const [title, setTitle] = useState(props.product?.title ?? '');
    const [description, setDescription] = useState(props.product?.description ?? '');
    const [price, setPrice] = useState(props.product?.price ?? '');
    const [discount, setDiscount] = useState(props.product?.discount ?? '');
    const [discountDate, setDiscountDate] = useState(props.product?.discountDate ?? '');
    const [image, setImage] = useState(props.product?.image ?? '');

    return (
        <>
            <TextField
                required
                label="Наименование товара"
                style={{ margin: 15 }}
                fullWidth
                margin="normal"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                required
                label="Фото"
                style={{ margin: 15 }}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Описание товара"
                style={{ margin: 15 }}
                fullWidth
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
            <DateField
                value={discountDate}
                onChange={(e) => setDiscountDate(e.target.value)}
            />
        </>
    );
};

export default ProductForm;
