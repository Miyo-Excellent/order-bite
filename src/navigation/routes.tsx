import React from 'react';
import { AppRoutes } from '@navigation/appRouter';
import { NotFoundViewModel } from '@viewmodels/notFound.viewmodel';
import { SplashViewmodel } from '@viewmodels/splash.viewmodel';
import { AppetizersViewmodel } from '@viewmodels/appetizers.viewmodel';
import { MainCoursesViewmodel } from '@viewmodels/mainCourses.viewmodel';
import { DrinksViewModel } from '@viewmodels/drinks.viewmodel';

export const routes: AppRoutes[] = [
  {
    name: 'main',
    pages: [
      {
        name: 'not-found',
        path: '*',
        element: <NotFoundViewModel />
      },
      {
        name: 'splash',
        path: '/',
        element: <SplashViewmodel />
      },
      {
        name: 'appetizers',
        path: '/appetizers',
        element: <AppetizersViewmodel />
      },
      {
        name: 'main-courses',
        path: '/main-courses',
        element: <MainCoursesViewmodel />
      },
      {
        name: 'drinks',
        path: '/drinks',
        element: <DrinksViewModel />
      },
      {
        name: 'shares',
        path: '/shares',
        element: <DrinksViewModel />
      }
    ]
  }
];
