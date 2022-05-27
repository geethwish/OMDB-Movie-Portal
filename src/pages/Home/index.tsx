// components
import Container from '../../components/Container/Container'
import Alert from '../../components/Alert/Alert'
import _ from "underscore";
// styles
import styles from './Home.module.scss'
import MovieCard from '../../components/MovieCard/MovieCard'
import Pagination from '../../components/Pagination/Pagination'
import { useAppSelector } from '../../app/hooks'
import { movies } from '../../redux/movies/moviesSlice'
import Loading from '../../components/Loading/Loading'

const Home = () => {

    const SearchedMovieResult: any = useAppSelector(movies, _.isEqual);

    console.log(SearchedMovieResult, "rendering 1");

    return (
        <div className={styles.homeWrapper}>

            <Container>

                {/* {handle failed api request} */}

                {
                    SearchedMovieResult.status === "failed" && <Alert
                        type='error'
                        message='Movie not found !'
                        textAlign='center'
                    />
                }

                {/* {show welcome message when entering to the page} */}

                {
                    SearchedMovieResult.status === "idle" && <Alert
                        type='info'
                        message=' Welcome to OMDB Search, search something in the bar above !'
                        textAlign='center'
                    />
                }

                {/* {Show Loader} */}
                {
                    SearchedMovieResult.status === "loading" && <Loading />
                }

                {/* {Show Movie Cards List} */}
                {
                    SearchedMovieResult.status === "success" && <>

                        <div className={styles.moviesContainer}>

                            {SearchedMovieResult.movies.Search.length > 0 && SearchedMovieResult.movies.Search.map((movie: any, index: number) => {

                                return <MovieCard key={index} data={movie} />

                            })}

                        </div>

                        {/* {Handle pagination} */}
                        <Pagination
                            totalMovies={SearchedMovieResult.movies.totalResults}
                            currentPage={SearchedMovieResult.currentPage}
                            searchKey={SearchedMovieResult.key}
                        />

                    </>

                }

            </Container>

        </div>
    )
}

export default Home