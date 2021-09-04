import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

const NumberFormatCustom = (props) => {
    const { inputRef, onChange, ...other } = props;
    const { suffix, decimalScale, minValue, maxValue } = props.defaultValue;

    const withValueLimit = ({ value }) => {
        return value >= minValue && value <= maxValue;
    };

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
            suffix={suffix}
            decimalSeparator=","
            decimalScale={decimalScale}
            isAllowed={withValueLimit}
        />
    );
};

const NumberField = (props) => {
    const { required, label, suffix, decimalScale, minValue, maxValue, value, onChange } = props;
    const params = { suffix, decimalScale, minValue, maxValue };

    return (
        <TextField
            required={required}
            label={label}
            fullWidth
            margin="normal"
            variant="outlined"
            name="number-format"
            style={{ margin: 15 }}
            value={value}
            onChange={onChange}
            defaultValue={params}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
};

export default NumberField;
