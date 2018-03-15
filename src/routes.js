import LandingPageContainer from './containers/LandingPageContainer';
import HomePage from './containers/HomePage';
import { routesPaths } from './constants/routesPaths';

const routes = [
  {
    path: routesPaths.index,
    component: LandingPageContainer,
    exact: true,
    index: true,
    private: true
  },
  {
    path: routesPaths.home,
    component: HomePage
  }
];

export default routes;
