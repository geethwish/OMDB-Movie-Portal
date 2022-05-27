import React, { memo, useState } from 'react'
import classNames from 'classnames'
import _ from "underscore";

// redux
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getExpandedMovieDetails, selectedMovie } from '../../redux/movies/movieSlice';

// components
import Buttons from '../Buttons/Buttons'
import Image from '../Image/Image'

//styles
import styles from './MovieCard.module.scss'

const MovieCard = (props: MovieCardProps) => {

    const dispatch = useAppDispatch();

    const { data } = props;

    // get the selected movie details form global state
    const movie: any = useAppSelector(selectedMovie, _.isEqual);

    // save expanded element status
    const [moreDetails, setMoreDetails] = useState(false);

    // request the selected movie details using imdb id
    const expandMovieCard = (imdbID: string) => {

        dispatch(getExpandedMovieDetails(imdbID))

        // set expand status to true
        setMoreDetails(true)
    }

    return (
        <div
            className={classNames(
                styles.cardWrapper,
                moreDetails ? styles.fullWidth : ''
            )}>

            <div className={styles.posterSection}>

                <Image url={data.Poster} alt={data.Title} />

            </div>

            <div className={styles.descriptionSection}>

                <div className={styles.cardContent}>

                    <h6 className={styles.title}>
                        {data.Title}
                    </h6>

                    {
                        movie && moreDetails && <div className={styles.moreDetails}>

                            <div className={styles.subTitle}>
                                Plot
                            </div>

                            <p> {movie.Plot} </p>

                            <div className={styles.subTitle}>
                                Actors
                            </div>

                            <p> {movie.Actors} </p>

                            <div className={styles.subTitle}>
                                Rating
                            </div>

                            {movie.Ratings && movie.Ratings.length > 0 &&

                                movie.Ratings.map((rating: any, index: number) => {

                                    return <p key={index}>- {rating.Source}: {rating.Value}</p>

                                })}

                        </div>
                    }

                </div>

                <div className={styles.cardFooter}>

                    <div className={styles.separator} />

                    <div className={styles.cardFooterContent}>

                        <div className={styles.year}>{data.Year}</div>

                        {
                            !moreDetails && <Buttons label='Details' onClick={() => expandMovieCard(data.imdbID)} />
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

type DataProps = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}
type MovieCardProps = {
    data: DataProps,
    className?: string | string[],
    style?: React.CSSProperties
};

export default memo(MovieCard)