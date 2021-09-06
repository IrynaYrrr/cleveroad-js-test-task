import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import Box from '@material-ui/core/Box';
import asyncActions from '../redux/asyncActions';

const Auth = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(asyncActions.login());
    };

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={10}>
                <GoogleButton
                    onClick={handleClick}
                />
            </Box>
        </>
    );
};

export default Auth;
