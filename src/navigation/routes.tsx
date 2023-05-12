import { AppRoutes } from '@navigation/appRouter';
import { NotFoundViewModel } from '@viewmodels/notFound.viewmodel';
import { SplashViewmodel } from '@viewmodels/splash.viewmodel';
import { AppetizersViewmodel } from '@viewmodels/appetizers.viewmodel';
import { MainCoursesViewmodel } from '@viewmodels/mainCourses.viewmodel';
import { DrinksViewModel } from '@viewmodels/drinks.viewmodel';
import { ShareViewModel } from '@viewmodels/share.viewmodel.tsx';
import { mainLoader } from '@loaders/main.loader.tsx';
import { breakfastsLoader } from '@loaders/recipes/breakfasts.loader.tsx';
import { dessertsLoader } from '@loaders/recipes/desserts.loader.tsx';
import { dinnersLoader } from '@loaders/recipes/dinners.loader.tsx';

export const routes: AppRoutes[] = [
  {
    name: 'main',
    pages: [
      {
        name: 'not-found',
        hidden: true,
        props: {
          path: '*',
          element: <NotFoundViewModel />
        }
      },
      {
        name: 'splash',
        hidden: true,
        props: {
          path: '/',
          element: <SplashViewmodel />,
          loader: mainLoader
        }
      },
      {
        name: 'appetizers',
        hidden: false,
        props: {
          path: '/appetizers',
          element: <AppetizersViewmodel />,
          loader: breakfastsLoader
        }
      },
      {
        name: 'main-courses',
        hidden: false,
        props: {
          path: '/main-courses',
          element: <MainCoursesViewmodel />,
          loader: breakfastsLoader
        }
      },
      {
        name: 'drinks',
        hidden: false,
        props: {
          path: '/drinks',
          element: <DrinksViewModel />,
          loader: dessertsLoader
        }
      },
      {
        name: 'shares',
        hidden: false,
        props: {
          path: '/shares',
          element: <ShareViewModel />,
          loader: dinnersLoader
        }
      }
    ]
  }
];
