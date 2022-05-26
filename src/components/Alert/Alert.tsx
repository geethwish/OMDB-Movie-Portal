import React from 'react'
import classNames from 'classnames';

// import styles
import styles from './Alert.module.scss'

const Alert = (props: AlertProps) => {

    // import props
    const { message, type, className, style, textAlign } = props;

    return (
        <div
            style={style ? style : {}}
            className={classNames(
                className ? className : '',
                styles.alert,
                styles[type],
                textAlign ? styles[textAlign] : ''

            )}>

            {message}

        </div>
    )
}

type AlertProps = {
    key?: string
    message: string,
    type: "success" | "info" | "alt" | "error",
    textAlign?: "center" | "left" | "right",
    className?: string | string[],
    style?: React.CSSProperties
};


export default Alert