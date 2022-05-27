import classNames from 'classnames';

//styles
import styles from './Image.module.scss';

const Image = ({ url, alt, srcset, className, style }: ImageProps) => {

    // set default image for movie poster section which is can't retrieve from database
    const handleImageError = (ev: any) => {

        ev.target.src = require('../../assets/images/noImage.png');

    }

    return (
        <>
            <img
                src={url}
                alt={alt}
                srcSet={srcset || ""}
                className={classNames(
                    className ? className : '',
                    styles.image
                )}
                style={style ? style : {}}
                onError={handleImageError}
            />
        </>
    )
}

type ImageProps = {
    url: string,
    alt: string,
    srcset?: string,
    className?: string | string[],
    style?: React.CSSProperties
};

export default Image