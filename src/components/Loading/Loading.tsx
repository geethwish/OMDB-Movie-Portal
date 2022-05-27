// styles
import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}

export default Loading