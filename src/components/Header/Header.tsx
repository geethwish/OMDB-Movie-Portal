import React from 'react'
import Container from '../Container/Container'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>

            <Container>
                Header
            </Container>
        </div>
    )
}

export default Header