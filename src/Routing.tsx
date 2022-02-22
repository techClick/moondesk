import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from './views/Loader/Loader';
import Navigation from './views/App/Navigation/Navigation';

const HomePage = lazy(() => import('./views/Public/HomePage/HomePage'));
const Income = lazy(() => import('./views/App/Income/Income'));
const Resources = lazy(() => import('./views/App/Resources/Resources'));
const Settings = lazy(() => import('./views/App/Settings/Settings'));
// localStorage.clear();

const Routing = function Routing() {
  return (
    <Router>
      <Navigation>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/income">
              <Income />
            </Route>
            <Route exact path="/app/resources">
              <Resources />
            </Route>
            <Route exact path="/app/settings">
              <Settings />
            </Route>
          </Switch>
        </Suspense>
      </Navigation>
    </Router>
  );
};

export default Routing;
