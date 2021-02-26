import React, { FunctionComponent } from 'react';
import './App.css';
import './core/i18n';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MuiTheme from './theme/muiTheme';
import TMRouter from './core/router/TMRouter';
import { StaleTime } from './definitions/enums';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: StaleTime.SHORT,
    },
  },
});

const app: FunctionComponent = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <QueryClientProvider client={queryClient}>
          <TMRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default app;
