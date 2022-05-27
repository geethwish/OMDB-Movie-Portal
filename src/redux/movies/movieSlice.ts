import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey';

export interface MovieState {
    movie: {};
    status: 'idle' | 'loading' | 'success' | 'failed';
}

const initialState: MovieState = {
    movie: {},
    status: 'idle',
};

// get the expanded movie details
export const getExpandedMovieDetails = createAsyncThunk(
    "get/movie",
    async (imdbID: string) => {

        try {

            const response: any = await movieApi.get(`?apikey=${APIKey}&i=${imdbID}&type=movie`);

            // check response is valid
            if (response && response.data.Response === "True") return response.data;

            // if response has error status throw an error
            throw new Error(response.data.Error)

        } catch (error: any) {

            throw new Error(error)

        }

    }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

        // handle the api request status
        builder
            .addCase(getExpandedMovieDetails.pending, (state, { payload }) => {

                state.status = "loading"

            })
            .addCase(getExpandedMovieDetails.fulfilled, (state, { payload }) => {

                state.movie = payload

            })
            .addCase(getExpandedMovieDetails.rejected, (state, { payload }) => {

                state.status = "failed"

            })
    }
});

// export reset
export const { reset } = movieSlice.actions;

// export the selected movie data set
export const selectedMovie = (state: RootState) => state.movie.movie;

export default movieSlice.reducer;
