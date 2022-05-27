import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { searchMovie } from '../../redux/movies/moviesSlice'

// components
import Buttons from '../Buttons/Buttons'
import Container from '../Container/Container'
import InputSearch from '../InputFields/InputSearch'

// styles
import styles from './Header.module.scss'

const Header = () => {

    const dispatch = useAppDispatch()

    const [searchKey, setSearchKey] = useState("")

    // handle movie search
    const search = () => {

        // search movies using entered key
        dispatch(searchMovie({ key: searchKey }))

    }
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
                            onChange={(e) => setSearchKey(e.target.value)}
                            value={searchKey}

                        />

                        <Buttons label='Search' onClick={search} />

                    </div>

                </div>


            </Container>
        </div>
    )
}

export default Header