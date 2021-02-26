import React, { FunctionComponent } from 'react';
import './App.css';
import './core/i18n';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MuiTheme from './theme/muiTheme';
import TMRouter from './core/router/TMRouter';

const app: FunctionComponent = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TMRouter />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default app;
