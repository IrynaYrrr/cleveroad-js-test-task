import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import dayjs from 'dayjs';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DateField = (props) => {
    const { label, format, value, onChange, error, helperText } = props;

    const handleDateChange = (date) => {
        onChange({ target: { value: dayjs(date).format('YYYY-MM-DD') } });
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                error={error}
                helperText={helperText}
                autoOk
                fullWidth
                disablePast
                variant="inline"
                inputVariant="outlined"
                label={label}
                format={format}
                value={value}
                InputAdornmentProps={{ position: 'start' }}
                onChange={date => handleDateChange(date)}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DateField;