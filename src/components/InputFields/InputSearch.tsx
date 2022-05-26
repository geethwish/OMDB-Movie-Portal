import classNames from 'classnames';

// styles
import styles from './InputFields.module.scss';

const InputSearch = (props: InputSearchProps) => {

    // import props
    const {
        name,
        value,
        defaultValue,
        id,
        className,
        onChange,
        placeholder,
        style,
        disabled
    } = props;

    return (
        <div className={styles.inputFieldWrapper}>

            <input
                type="search"
                name={name}
                id={id || name}
                className={classNames(
                    styles.input,
                    className ? className : ''
                )}
                style={style ? style : {}}
                placeholder={placeholder ? placeholder : ''}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
            />

        </div>
    )
}

type InputSearchProps = {
    name: string,
    id?: string,
    className?: string | string[],
    onChange?: (value: any) => void,
    value?: string,
    defaultValue?: string,
    placeholder?: string,
    disabled?: boolean,
    style?: React.CSSProperties
};

export default InputSearch