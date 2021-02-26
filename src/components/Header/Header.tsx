import React, { FunctionComponent } from 'react';
import { AppBar, Grid, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { mainMenu } from '../../core/router/MainMenu';

const MyComponent: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <Typography variant="h6">{t('appTitle')}</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              {mainMenu(t).map(({ path, label }) => (
                <Grid item key={label}>
                  <MenuItem component={Link} key={label} to={path}>
                    {label}
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyComponent;
