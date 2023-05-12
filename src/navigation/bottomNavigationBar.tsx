import { useEffect, useState } from 'react';
import { BottomNavigationBarContainer } from '@components/bottomNavigationBarContainer.tsx';
import { BottomNavigationBarItemContainer } from '@components/bottomNavigationBarItemContainer.tsx';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigationBarSection } from '@components/bottomNavigationBarSection.tsx';

export interface BottomNavigationBarProps {
  routes: BottomNavigationRoute[];
}

export interface BottomNavigationRoute {
  name: string;
  pages: BottomNavigationPage[];
}

export interface BottomNavigationPage {
  path: string;
  name: string;
}

export const BottomNavigationBar = ({ routes }: BottomNavigationBarProps) => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let page: BottomNavigationPage | undefined;

    routesLoop: for (const route of routes) {
      for (const _page of route.pages) {
        if (_page.path === location.pathname) {
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
          {route.pages.map((page, pageIndex) => (
            <BottomNavigationBarItemContainer
              key={`bottom-navigation-bar-section-${routeIndex}-page-${pageIndex}`}
              to={page.path}
            >
              {page.name}
            </BottomNavigationBarItemContainer>
          ))}
        </BottomNavigationBarSection>
      ))}
    </BottomNavigationBarContainer>
  );
};
