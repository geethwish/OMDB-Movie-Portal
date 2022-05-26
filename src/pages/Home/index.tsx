// components
import Container from '../../components/Container/Container'
import Alert from '../../components/Alert/Alert'

// styles
import styles from './Home.module.scss'
import MovieCard from '../../components/MovieCard/MovieCard'
const Home = () => {
    return (
        <div className={styles.homeWrapper}>

            <Container>

                <Alert
                    type='info'
                    message=' Welcome to OMDB Search, search something in the bar above !'
                    textAlign='center'
                />

                <div className={styles.moviesContainer}>

                    <MovieCard />

                </div>

            </Container>

        </div>
    )
}

export default Home