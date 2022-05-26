import React from 'react'

// components
import Buttons from '../Buttons/Buttons'
import Container from '../Container/Container'
import InputSearch from '../InputFields/InputSearch'

// styles
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>

            <Container>

                <div className={styles.headerContent}>

                    <div className={styles.headerTitleWrapper}>

                        <h1 className={styles.title}>
                            OMDB Search
                        </h1>

                    </div>

                    <div className={styles.headerSearchWrapper}>

                        <div className={styles.searchTest}>
                            Search a Movie
                        </div>


                        <InputSearch
                            name='searchMovie'

                        />

                        <Buttons label='Search' />

                    </div>

                </div>


            </Container>
        </div>
    )
}

export default Header