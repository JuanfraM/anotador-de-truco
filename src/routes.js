import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
import { routesPaths } from './constants/routesPaths';

const routes = [
  {
    path: routesPaths.index,
    component: LandingPage,
    exact: true,
    index: true,
    private: true
  },
  {
    path: routesPaths.home,
    component: HomePage
  },
  {
    component: NotFoundPage
  }
];

export default routes;
