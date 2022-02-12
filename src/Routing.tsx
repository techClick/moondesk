import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from './views/Loader/Loader';
import Navigation from './views/Navigation/Navigation';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const App = lazy(() => import('./views/App/App'));
const Income = lazy(() => import('./views/Income/Income'));

const Routing = function Routing() {
  return (
    <Router>
      <Route render={() => (
        <Navigation>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/app/">
                <App />
              </Route>
              <Route exact path="/app/income">
                <Income />
              </Route>
            </Switch>
          </Suspense>
        </Navigation>
      )}
      />
    </Router>
  );
};

export default Routing;
