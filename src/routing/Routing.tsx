import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { minRes } from 'views/styles';
import Loader from 'views/Loader/Loader';
import Navigation from 'views/App/Navigation/Navigation';
import { getImportColsPaths } from './utils';

const HomePage = lazy(() => import('views/Public/HomePage/HomePage'));
const Income = lazy(() => import('views/App/Income/Income'));
const Resources = lazy(() => import('views/App/Resources/Resources'));
const Settings = lazy(() => import('views/App/Settings/Settings'));
const ImportTypes = lazy(() => import('views/App/ImportTypes/ImportTypes'));
const ImportCols = lazy(() => import('views/App/ImportCols/ImportCols'));
// localStorage.clear();
localStorage.setItem('projectId', '1');

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
            <Route exact path={['/app/income/importtypes', '/app/resources/importtypes']}>
              <ImportTypes />
            </Route>
            <Route exact path={getImportColsPaths()}>
              <>
                <MediaQuery maxWidth={minRes}>
                  <ImportCols />
                </MediaQuery>
                <MediaQuery minWidth={minRes + 0.0001}>
                  <ImportCols />
                </MediaQuery>
              </>
            </Route>
          </Switch>
        </Suspense>
      </Navigation>
    </Router>
  );
};

export default Routing;
