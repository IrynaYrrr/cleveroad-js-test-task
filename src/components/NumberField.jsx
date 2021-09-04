import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';


const NumberFormatCustom = (props) => {
    const {inputRef, onChange, ...other} = props;
    console.log(props);

    let withValueLimit;
    if(props.minValue && props.maxValue){
        withValueLimit = ({value}) => {
            return value >= props.minValue && value <= props.maxValue;
        };
    }

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
            suffix={props.suffix}
            decimalSeparator=","
            decimalScale={props.decimalScale}
            isAllowed={!withValueLimit}

        />
    );
};

const NumberField = (props) => {
    const {label, suffix, required, decimalScale, minValue, maxValue} = props;

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
            required={required}
            label={label}
            fullWidth
            margin="normal"
            variant="outlined"
            name="number-format"
            style={{margin: 15}}
            // value={values.numberFormat}
            // onChange={handleChange}
            // id="4"
            InputProps={{
                inputComponent:
                    (props) =>
                        NumberFormatCustom({...props, suffix, decimalScale, minValue, maxValue}),
            }}
        />
    );
};

export default NumberField;
