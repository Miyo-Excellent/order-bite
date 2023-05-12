import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { SplashView } from '@views/splash.view';

export interface SplashViewModelProps {}

export const SplashViewmodel = ({}: SplashViewModelProps) => {
  const { recipes }: any = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(recipes);

    setTimeout(() => {
      navigate('/appetizers');
    }, 3000);
  }, []);

  return <SplashView />;
};
