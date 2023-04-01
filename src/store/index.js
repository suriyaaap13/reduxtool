import { configureStore } from "@reduxjs/toolkit";
import { addSong, removeSong, songReducer } from "./slices/songsSlice";
import { addMovie, removeMovie, movieReducer } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  }
});

export { store, addMovie, removeMovie, addSong, removeSong, reset };
