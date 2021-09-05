import ImageUploading from 'react-images-uploading';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    media: {
        height: 300,
        width: 300,
    },
});

const CardMediaCustom = (props) => {
    const classes = useStyles();

    const { image, imageFile } = props;

    if (imageFile) {
        return (
            <CardMedia
                className={classes.media}
                component="img"
                src={imageFile.base64}
            />
        );
    }

    if (image) {
        return (
            <CardMedia
                className={classes.media}
                image={image}
            />
        );
    }

    return (
        <></>
    );
};

const ImageUpload = (props) => {
    const { image, imageFile, setImageFile } = props;

    const onChange = async (imageList) => {
        setImageFile(imageList[0]);
    };

    return (
        <ImageUploading
            value={image}
            onChange={onChange}
            dataURLKey="base64"
        >
            {({ onImageUpload }) => (
                <>
                    <CardMediaCustom
                        image={image}
                        imageFile={imageFile}
                    />
                    <br />
                    <Button
                        variant="contained"
                        onClick={onImageUpload}
                    >
                        Load Image
                    </Button>
                </>
            )}
        </ImageUploading>
    );
};

export default ImageUpload;
