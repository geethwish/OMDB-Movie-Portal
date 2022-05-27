import { useMemo, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { searchMovie } from '../../redux/movies/moviesSlice';
import Buttons from '../Buttons/Buttons';
import styles from './Pagination.module.scss';

const Pagination = ({ totalMovies, currentPage, searchKey }: PaginationProps) => {

    const dispatch = useAppDispatch()

    const [totalPages, setTotalPages] = useState(0);

    // we'll use useMeme hook here for prevent unnecessary rerendering
    useMemo(() => {

        // calculate the page count
        const pagesCount = Math.ceil(parseInt(totalMovies) / 10);

        // update the local state
        setTotalPages(pagesCount);

    }, [totalMovies])

    // handle next button
    const next = () => {

        // check the current page is not exceed the total page count .
        if (currentPage < totalPages) {

            // set the filers object and next page number
            const currentFilters: any = {
                key: searchKey,
                page: currentPage + 1
            }

            //request the next data set
            dispatch(searchMovie(currentFilters))
        }

    }

    // handle previous button
    const previous = () => {

        // prevent request data for page zero
        if (currentPage > 1) {

            // set filer function and reduce 1 page from current page count and request data set
            const currentFilters: any = {
                key: searchKey,
                page: currentPage - 1
            }

            dispatch(searchMovie(currentFilters))
        }
    }

    return (

        <div className={styles.container}>

            <div className={styles.wrapper}>

                <Buttons
                    label='Previous'
                    style={{ marginLeft: 0, marginRight: '1rem' }}
                    variant={"link"}
                    onClick={previous}
                    disabled={currentPage === 1}
                />

                <p className={styles.pages}>
                    {currentPage}/{totalPages}
                </p>

                <Buttons
                    label='next'
                    variant={"link"}
                    onClick={next}
                    disabled={currentPage === totalPages}
                />

            </div>

        </div>
    )
}

type PaginationProps = {
    totalMovies: string,
    currentPage: number,
    searchKey: string,
    className?: string | string[],
    style?: React.CSSProperties
};
export default Pagination