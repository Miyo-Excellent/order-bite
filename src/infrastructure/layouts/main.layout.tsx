import { Outlet } from 'react-router-dom';
import { MainLayoutContainer } from '@components/mainLayoutContainer';
import { BottomNavigationBar } from '@navigation/bottomNavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mainLoader } from '@loaders/main.loader';
import { setRecipes } from '@slices/recipes.slice';
import { type SetRecipesPayload } from '@payloads/recipe/setRecipes.payload';

export interface MainLayoutProps {}

export const MainLayout = ({}: MainLayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { recipes } = await mainLoader();

      for (const [recipeKey, recipeValue] of Object.entries(recipes)) {
        const data: SetRecipesPayload = {
          to: recipeKey,
          data: recipeValue
        };

        dispatch(setRecipes(data as any));
      }
    })();
  }, []);

  return (
    <MainLayoutContainer>
      <Outlet />

      <BottomNavigationBar
        routes={[
          {
            name: 'Main',
            pages: [
              {
                name: 'Appetizers',
                path: '/appetizers'
              },
              {
                name: 'Main courses',
                path: '/main-courses'
              },
              {
                name: 'Drinks',
                path: '/drinks'
              },
              {
                name: 'Shares',
                path: '/shares'
              }
            ]
          }
        ]}
      />
    </MainLayoutContainer>
  );
};
