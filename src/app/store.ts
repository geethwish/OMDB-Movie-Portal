import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from '../redux/movies/moviesSlice';
import movieReducer from '../redux/movies/movieSlice';

// add reducers
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
