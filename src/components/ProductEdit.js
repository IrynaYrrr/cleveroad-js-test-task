import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import NumberField from "./NumberField";
import DateField from "./DateField";


export default function LayoutTextFields() {

    return (
                <Container maxWidth="md">
                    <TextField
                        required
                        id="1"
                        label="Заголовок"
                        style={{margin: 15}}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="2"
                        label="Фото"
                        style={{margin: 15}}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="3"
                        label="Описание товара"
                        style={{margin: 15}}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />

                    <NumberField label="Цена" suffix=" грн" decimalScale={2} required />

                    <NumberField label="Процент скидки" suffix=" %" decimalScale={0} minValue={10} maxValue={90} />

                    <DateField />

                    </Container>
);
}