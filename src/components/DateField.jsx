import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {useState} from 'react';

const DateField = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                    autoOk
                    fullWidth
                    // id="date-picker-dialog"
                    variant="inline"
                    inputVariant="outlined"
                    label="Выбрать дату"
                    format="dd.MM.yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{position: 'start'}}
                    onChange={date => handleDateChange(date)}
                    style={{margin: 15}}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default DateField;