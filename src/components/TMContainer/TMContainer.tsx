import React, { FunctionComponent, ReactNode } from 'react';
import { Card, CardContent, CardHeader as MuiHeaders, CardMedia } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../theme/theme';

type TMContainerProps = {
  headerText?: string;
  headerBackground?: Colors;
  headerLeftAction?: ReactNode;
  children: ReactNode;
  image?: string;
};

const CardHeader = styled(MuiHeaders)`
  ${(p: { $backgroundColor?: Colors }) =>
    p.$backgroundColor && `background-color: ${p.$backgroundColor}`};
  .MuiCardHeader-action {
    margin-bottom: auto;
    margin-top: auto;
  }
`;

const TMContainer: FunctionComponent<TMContainerProps> = ({
  children,
  headerText,
  image,
  headerBackground,
  headerLeftAction,
}) => {
  return (
    <Card>
      {(headerText || headerLeftAction) && (
        <CardHeader
          title={headerText}
          action={headerLeftAction}
          $backgroundColor={headerBackground}
        />
      )}
      {image && <CardMedia component="img" src={`${image}`} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TMContainer;
