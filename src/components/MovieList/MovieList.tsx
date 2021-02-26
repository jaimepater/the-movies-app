import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import TMContainer from '../TMContainer/TMContainer';
import { Movie } from '../../definitions/types';
import MovieItem from './sections/MovieItem/MovieItem';
import { StaticSpacing } from '../../theme/theme';

type MovieListProps = {
  movies: Movie[];
  onSelectMovie?: Function;
  onDeleteMovie?: Function;
  movieSelected: string;
};

const MoviesContainer = styled.div`
  .MuiCard-root > .MuiCardContent-root {
    padding: ${StaticSpacing.MD};
  }
`;

const MovieList: FunctionComponent<MovieListProps> = ({
  movies,
  onDeleteMovie,
  onSelectMovie,
  movieSelected,
}) => {
  return (
    <MoviesContainer>
      {!!movies.length && (
        <TMContainer>
          {movies.map((movie: Movie) => (
            <MovieItem
              movie={movie}
              selected={movieSelected === movie.id}
              key={movie.title}
              onClick={onSelectMovie}
              onDelete={onDeleteMovie}
            />
          ))}
        </TMContainer>
      )}
    </MoviesContainer>
  );
};

export default MovieList;
