import React from 'react'
import classNames from 'classnames';

// styles
import styles from './Buttons.module.scss';

const Buttons = (props: ButtonsProps) => {

    // import props
    const {
        label,
        id,
        className,
        style,
        disabled,
        onClick,
        variant

    } = props;

    return (
        <button
            id={id}
            style={style ? style : {}}
            className={classNames(
                styles.button,
                className ? className : '',
                variant ? styles[variant] : ''
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {label || "Submit"}
        </button>
    )
}

type ButtonsProps = {
    label: string,
    id?: string,
    className?: string | string[],
    onClick?: () => void,
    disabled?: boolean,
    style?: React.CSSProperties,
    variant?: string,
};
export default Buttons