import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Grid, Link as muiLink, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Colors, StaticSpacing } from '../../../../theme/theme';
import { Movie } from '../../../../definitions/types';
import ReleaseDate from '../../../ReleaseDate/ReleaseDate';

type MovieItemProps = {
  selected?: boolean;
  movie: Movie;
  onClick?: Function;
  onDelete?: Function;
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
  movie: { title, releaseDate, id },
  onClick,
  onDelete,
  selected,
}) => {
  return (
    <MovieItemContainer $isSelected={selected || false}>
      <Grid container direction="row" alignItems="center" justify="space-between" spacing={3}>
        <Grid item>
          <Link color="textPrimary" underline="none" onClick={() => onClick && onClick(id)}>
            <Typography variant="h6">{title}</Typography>
            <ReleaseDate date={releaseDate} />
          </Link>
        </Grid>
        {onDelete && (
          <Grid item onClick={() => onDelete(id)}>
            <DeleteIcon color="error" />
          </Grid>
        )}
      </Grid>
    </MovieItemContainer>
  );
};

export default MovieItem;
