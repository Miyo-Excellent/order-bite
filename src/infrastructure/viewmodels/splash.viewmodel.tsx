import { useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { SplashView } from '@views/splash.view';

export interface SplashViewModelProps {}

export const SplashViewmodel = ({}: SplashViewModelProps) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(navigation);
    setTimeout(() => {
      navigate('/appetizers', { replace: true });
    }, 2000);
  }, [navigation]);

  return <SplashView />;
};
