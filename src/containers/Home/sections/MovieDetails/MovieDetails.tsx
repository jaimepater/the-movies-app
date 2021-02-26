import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Movie } from '../../../../definitions/types';
import TMContainer from '../../../../components/TMContainer/TMContainer';
import ReleaseDate from '../../../../components/ReleaseDate/ReleaseDate';
import { StaticSpacing } from '../../../../theme/theme';

type MovieDetailsProps = {
  movie: Movie;
};

const ButtonContainer = styled.div`
   {
    margin-bottom: ${StaticSpacing.SM};
    text-align: right;
  }
`;

const MovieDetails: FunctionComponent<MovieDetailsProps> = ({
  movie: { title, release, description, image },
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/add-movie');
          }}
        >
          {t('addNewMovie')}
        </Button>
      </ButtonContainer>
      <TMContainer
        headerText={title}
        headerLeftAction={<ReleaseDate date={release} />}
        image={image}
      >
        <Typography>{description}</Typography>
      </TMContainer>
    </>
  );
};

export default MovieDetails;
