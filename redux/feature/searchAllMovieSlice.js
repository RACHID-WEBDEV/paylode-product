import { createSlice } from '@reduxjs/toolkit';

const searchAllMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchMoviesList: [],
        searchMovie: {}
    },
    reducers: {
        getSearchMovies(name) {
            return name;
        },
        setSearchMovies: (state, action) => {
            state.searchMoviesList = action.payload;
        },
        getSearchMovie(id) {
            return id;
        },
        setSearchMovie: (state, action) => {
            state.movie = action.payload;
        },

    }
});


export const { getSearchMovies, setSearchMovies, getSearchMovie, setSearchMovie } = searchAllMovieSlice.actions;

export default searchAllMovieSlice.reducer;
