import React, { FunctionComponent } from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Page } from '../../components/Page/Page';
import { Movie } from '../../definitions/types';
import { httpCall } from '../../core/httpCall';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

interface Movies {
  movies: Movie[];
}

const TopMovies: FunctionComponent = () => {
  const { data: topMoviesResp, isFetching: isFetchingTopMovies } = useQuery<
    AxiosResponse<Movies>,
    string
  >('top-5-movies', () =>
    httpCall<AxiosResponse<Movies>>(process.env.REACT_APP_TOP_MOVIES || '', 'GET'),
  );
  const movies = topMoviesResp?.data.movies;

  if (isFetchingTopMovies) {
    return <Loader />;
  }
  return <Page>{movies ? <MovieList movies={movies} showsImage /> : <div />}</Page>;
};

export default TopMovies;
