import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey';

type MoviesFilter = {
    key?: string,
    page?: number,
}

export interface MoviesState {
    movies: any;
    status: 'idle' | 'loading' | 'success' | 'failed';
    currentPage: number,
    key: any
}

const initialState: MoviesState = {
    movies: [],
    status: 'idle',
    currentPage: 0,
    key: null
};

// get the movie result by searching a movie title
export const searchMovie = createAsyncThunk(
    "movie/search",
    async ({ page, key }: MoviesFilter) => {

        // manage the search query fo different filtration
        const searchQuery = `&s=${key}${page ? '&page=' + page : ''}`

        try {

            const response: any = await movieApi.get(`?apikey=${APIKey}&type=movie${searchQuery}`);

            // check valid response
            if (response && response.data.Response === "True") {


                const returnDataSet: any = {
                    data: response.data
                }

                // add search key for return data object
                if (key) {
                    returnDataSet.key = key
                }

                // add page number for return data object
                if (page) {

                    returnDataSet.page = page
                }

                return returnDataSet;
            }

            throw new Error(response.data.Error)

        } catch (error: any) {

            throw new Error(error)

        }

    }
);

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

        // handle api request status
        builder
            .addCase(searchMovie.pending, (state) => {

                state.status = "loading"

            })
            .addCase(searchMovie.fulfilled, (state, { payload }) => {

                state.status = "success"

                state.movies = payload.data;

                state.currentPage = payload.page || 1;

                state.key = payload.key

            })
            .addCase(searchMovie.rejected, (state) => {

                state.status = "failed"

            })
    }
});

export const { reset } = moviesSlice.actions;

export const movies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
