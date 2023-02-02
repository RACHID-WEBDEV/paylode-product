import { createSlice } from '@reduxjs/toolkit';

const searchAllMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchMoviesList: [],
        searchMovie: {},
        loading: false,
        error: null
    },
    reducers: {
        getSearchMovies: (state, action) => {
            state.loading = true;
        },
        setSearchMovies: (state, action) => {
            state.loading = false;
            state.searchMoviesList = action.payload;
        },
        getSearchMovie: (state, action) => {
            state.loading = true;
        },
        setSearchMovie: (state, action) => {
            state.loading = false;
            state.searchMovie = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export const { getSearchMovies, setSearchMovies, getSearchMovie, setSearchMovie, setError } = searchAllMovieSlice.actions;

export default searchAllMovieSlice.reducer;

