import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Routes
} from 'react-router-dom';
import { BottomNavigationBar } from '@navigation/bottomNavigationBar.tsx';

export interface AppRoute {
  name: string;
  hidden: boolean;
  props: RouteProps;
}

export interface AppRoutes {
  name: string;
  pages: AppRoute[];
}

export interface AppRouterProps {
  routes: AppRoutes[];
}

export const AppRouter = ({ routes }: AppRouterProps) => (
  <Router>
    {routes.map((route) => (
      <Routes key={route.name}>
        {route.pages.map((page) => (
          <Route key={page.name} {...page.props} />
        ))}
      </Routes>
    ))}

    <BottomNavigationBar routes={routes} />
  </Router>
);
