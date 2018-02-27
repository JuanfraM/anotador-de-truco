import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';
import routesPaths from './constants/routesPaths';

const routes = [
  {
    path: routesPaths.index,
    component: LandingPage,
    componentAuthenticated: HomePage,
    exact: true,
    index: true
  },
  {
    path: routesPaths.homePage,
    component: HomePage
  },
  {
    component: NotFoundPage
  }
];

export default routes;
