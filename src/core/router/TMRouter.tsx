import React, { FunctionComponent, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Home = lazy(() => import('../../containers/Home/Home'));
const AddMovie = lazy(() => import('../../containers/AddMovie/AddMovie'));

const TMRouter: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-movie">
            <AddMovie />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default TMRouter;
