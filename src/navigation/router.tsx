import { createBrowserRouter } from 'react-router-dom';
import { NotFoundViewModel } from '@viewmodels/notFound.viewmodel';
import { AppetizersViewmodel } from '@viewmodels/appetizers.viewmodel';
import { MainCoursesViewmodel } from '@viewmodels/mainCourses.viewmodel';
import { DrinksViewModel } from '@viewmodels/drinks.viewmodel';
import { ShareViewModel } from '@viewmodels/share.viewmodel';
import { MainLayout } from '@layouts/main.layout';
import { SplashViewmodel } from '@viewmodels/splash.viewmodel';
// import { breakfastsLoader } from '@loaders/recipes/breakfasts.loader';
// import { lunchesLoader } from '@loaders/recipes/lunches.loader';
// import { drinksLoader } from '@loaders/recipes/drinks.loader';
// import { cocktailsLoader } from '@loaders/recipes/cocktails.loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundViewModel />,
    children: [
      {
        index: true,
        element: <SplashViewmodel />
      },
      {
        path: '/appetizers',
        element: <AppetizersViewmodel />,
        // loader: breakfastsLoader
      },
      {
        path: '/main-courses',
        element: <MainCoursesViewmodel />,
        // loader: lunchesLoader
      },
      {
        path: '/drinks',
        element: <DrinksViewModel />,
        // loader: drinksLoader
      },
      {
        path: '/shares',
        element: <ShareViewModel />,
        // loader: cocktailsLoader,
      }
    ]
  }
]);
