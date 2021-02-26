import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type ReleaseDateProps = {
  date: string;
};

const ReleaseDate: FunctionComponent<ReleaseDateProps> = ({ date }) => {
  const { t } = useTranslation();
  return <Typography variant="body2">{`${t('releaseDate').toUpperCase()} ${date}`}</Typography>;
};

export default ReleaseDate;
