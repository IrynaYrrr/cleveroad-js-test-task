import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';


const NumberFormatCustom = (props) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator=" "
            isNumericString
            suffix = " грн"
            decimalSeparator=","
            decimalScale={2}
        />
    );
}

const NumberField = () => {
    // const classes = useStyles();
    // const [values, setValues] = React.useState({
    //     numberFormat: '1320',
    // });
    //
    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    return (
            <TextField
                required
                id="4"
                label="Цена"
                fullWidth
                margin="normal"
                variant="outlined"
                name="number-format"
                style={{margin: 15}}
                // value={values.numberFormat}
                // onChange={handleChange}
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
    );
};

export default NumberField;
