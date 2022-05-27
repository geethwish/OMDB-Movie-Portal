
import React, { useState } from 'react'
import classNames from 'classnames'

import Buttons from '../Buttons/Buttons'

import styles from './MovieCard.module.scss'
const MovieCard = () => {

    const [moreDetails, setMoreDetails] = useState(false);


    return (
        <div className={classNames(
            styles.cardWrapper,
            moreDetails ? styles.fullWidth : ''
        )}>

            <div className={styles.posterSection}>
                poster
            </div>

            <div className={styles.descriptionSection}>

                <div className={styles.cardContent}>

                    <h6>
                        Title
                    </h6>

                    {
                        moreDetails && <div className={styles.moreDetails}>

                            <div className={styles.subTitle}>
                                Plot
                            </div>

                            <div className={styles.subTitle}>
                                Actors
                            </div>

                            <div className={styles.subTitle}>
                                Rating
                            </div>

                        </div>
                    }

                </div>

                <div className={styles.cardFooter}>

                    <div className={styles.separator} />

                    <div className={styles.cardFooterContent}>

                        <p>2012</p>

                        {
                            !moreDetails && <Buttons label='Details' onClick={() => setMoreDetails(true)} />
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MovieCard