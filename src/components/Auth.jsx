import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import Box from '@material-ui/core/Box';

const Auth = () => {
    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
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
