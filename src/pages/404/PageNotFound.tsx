import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
    return (
        <div className={styles.notFoundWrapper}>
            <div className={styles.notFound}>
                <h1>Error 404</h1>
            </div>
        </div>
    )
}

export default PageNotFound