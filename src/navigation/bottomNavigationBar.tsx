import { useEffect, useState } from 'react';
import { BottomNavigationBarContainer } from '@components/bottomNavigationBarContainer.tsx';
import { AppRoute, AppRoutes } from '@navigation/appRouter.tsx';
import { BottomNavigationBarItemContainer } from '@components/bottomNavigationBarItemContainer.tsx';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigationBarSection } from '@components/bottomNavigationBarSection.tsx';

export interface BottomNavigationBarProps {
  routes: AppRoutes[];
}

export const BottomNavigationBar = ({ routes }: BottomNavigationBarProps) => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let page: AppRoute | undefined;

    routesLoop: for (const route of routes) {
      for (const _page of route.pages) {
        if (!_page.hidden && _page.props.path === location.pathname) {
          page = _page;
          break routesLoop;
        }
      }
    }

    setShow(!!page);
  }, [location]);

  if (!show) return null;

  return (
    <BottomNavigationBarContainer>
      {routes.map((route, routeIndex) => (
        <BottomNavigationBarSection
          key={`bottom-navigation-bar-section-${routeIndex}`}
        >
          {route.pages
            .filter((page) => !page.hidden)
            .map((page, pageIndex) => (
              <BottomNavigationBarItemContainer
                key={`bottom-navigation-bar-section-${routeIndex}-page-${pageIndex}`}
                onClick={() => {
                  if (page.props.path) navigate(page.props.path);
                }}
              >
                {page.name}
              </BottomNavigationBarItemContainer>
            ))}
        </BottomNavigationBarSection>
      ))}
    </BottomNavigationBarContainer>
  );
};
