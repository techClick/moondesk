import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Loader from './views/Loader/Loader';

// const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const PieChart = lazy(() => import('./views/PieChart/PieChart'));

const Routing = function Routing() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Route path="/">
          <PieChart />
          {/* <HomePage /> */}
        </Route>
      </Suspense>
    </Router>
  );
};

export default Routing;
