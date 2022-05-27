import Buttons from '../Buttons/Buttons';
import styles from './Pagination.module.scss';

const Pagination = () => {
    return (

        <div className={styles.container}>

            <div className={styles.wrapper}>

                <Buttons label='Previous' style={{ marginLeft: 0, marginRight: '1rem' }} variant={"link"} />

                <p className={styles.pages}>
                    1/10
                </p>

                <Buttons label='next' variant={"link"} />

            </div>

        </div>
    )
}

export default Pagination