export const GET_MOVIES = 'GET_MOVIES';
export const SAVE_MOVIE = 'SAVE_MOVIE';

export const getMovies = (genre, year) => ({
  type: GET_MOVIES,
  payload: {
    genre,
    year
  }
});

export const saveMovie = (id, title, year, genre) => ({
  type: SAVE_MOVIE,
  payload: {
    id,
    title,
    genre,
    year
  }
})