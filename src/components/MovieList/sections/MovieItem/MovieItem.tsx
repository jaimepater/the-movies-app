import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Grid, Link as muiLink, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Colors, StaticSpacing } from '../../../../theme/theme';
import { Movie } from '../../../../definitions/types';
import ReleaseDate from '../../../ReleaseDate/ReleaseDate';

export type MovieItemProps = {
  selected?: boolean;
  movie: Movie;
  onClick?: Function;
  onDelete?: Function;
  showsImage?: boolean;
};

interface MovieItemContainerProp {
  $isSelected: boolean;
}

const MovieItemContainer = styled.div`
  padding: ${StaticSpacing.XS};
  margin-bottom: ${StaticSpacing.XS};
  border: ${(p: MovieItemContainerProp) =>
    `1px solid ${p.$isSelected ? Colors.Primary : Colors.Gray40}`};
`;

const Link = styled(muiLink)`
  cursor: pointer;
`;

const MovieItem: FunctionComponent<MovieItemProps> = ({
  movie: { title, release, id, image },
  onClick,
  onDelete,
  selected,
  showsImage,
}) => {
  return (
    <MovieItemContainer $isSelected={selected || false}>
      <Grid container direction="row" alignItems="center" justify="space-between" spacing={3}>
        {showsImage && (
          <Grid item>
            <img src={image} alt="movie" />
          </Grid>
        )}
        <Grid item>
          <Link
            color="textPrimary"
            underline="none"
            onClick={() => onClick && onClick(id)}
            data-testid="select-option"
          >
            <Typography variant="h6">{title}</Typography>
            <ReleaseDate date={release} />
          </Link>
        </Grid>
        {onDelete && (
          <Grid item onClick={() => onDelete(id)} data-testid="delete-option">
            <DeleteIcon color="error" />
          </Grid>
        )}
      </Grid>
    </MovieItemContainer>
  );
};

export default MovieItem;
