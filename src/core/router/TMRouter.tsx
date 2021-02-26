import React, { FunctionComponent, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Home = lazy(() => import('../../containers/Home/Home'));
const AddMovie = lazy(() => import('../../containers/AddMovie/AddMovie'));
const TopMovies = lazy(() => import('../../containers/TopMovies/TopMovies'));

const TMRouter: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add-movie">
            <AddMovie />
          </Route>
          <Route exact path="/top-movies">
            <TopMovies />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default TMRouter;
