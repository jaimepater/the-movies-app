import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from '../../components/MovieList/MovieList';
import {
  allMovies,
  removeMovie,
  selectedMovie,
  selectMovie,
} from '../../core/store/features/movies/moviesSlice';
import MovieDetails from './sections/MovieDetails/MovieDetails';

import { Page } from '../../components/Page/Page';

const Home: FunctionComponent = () => {
  const movies = useSelector(allMovies);
  const movieSelected = useSelector(selectedMovie);
  const dispatch = useDispatch();
  const handleSelectMovie = (id: string) => {
    dispatch(selectMovie(id));
  };

  const handleRemoveMovie = (id: string) => {
    dispatch(removeMovie(id));
  };
  return (
    <Page>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <MovieList
            movieSelected={movieSelected?.id || ''}
            movies={movies}
            onDeleteMovie={handleRemoveMovie}
            onSelectMovie={handleSelectMovie}
          />
        </Grid>
        <Grid item md={8}>
          {movieSelected && <MovieDetails movie={movieSelected} />}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
