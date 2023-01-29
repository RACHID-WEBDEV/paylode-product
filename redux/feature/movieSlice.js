// import { createSlice } from '@reduxjs/toolkit';

// const movieSlice = createSlice({
//     name: 'movie',
//     initialState: {
//         moviesList: [],
//         movie: {}
//     },
//     reducers: {
//         getMovies(name) {
//             return name;
//         },
//         setMovies: (state, action) => {
//             state.moviesList = action.payload;
//         },
//         getMovie(id) {
//             return id;
//         },
//         setMovie: (state, action) => {
//             state.movie = action.payload;
//         },

//     }
// });


// export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

// export default movieSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        moviesList: [],
        movie: {},
        loading: false,
        error: null
    },
    reducers: {
        getMovies: (state, action) => {
            state.loading = true;
        },
        setMovies: (state, action) => {
            state.loading = false;
            state.moviesList = action.payload;
        },
        getMovie: (state, action) => {
            state.loading = true;
        },
        setMovie: (state, action) => {
            state.loading = false;
            state.movie = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export const { getMovies, setMovies, getMovie, setMovie, setError } = movieSlice.actions;

export default movieSlice.reducer;
