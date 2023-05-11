import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Routes
} from 'react-router-dom';

export interface AppRoute extends RouteProps {
  name: string;
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
      <Routes key={route.name} >
        {route.pages.map((page) => (
          <Route key={page.name} {...page} />
        ))}
      </Routes>
    ))}
  </Router>
);
