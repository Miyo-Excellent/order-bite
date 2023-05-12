import loaderWebp from '@assets/loader.webp';
import { SplashContainer } from '@components/splashContainer';

export interface SplashViewProps {}

export const SplashView = ({}: SplashViewProps) => (
  <SplashContainer>
    <img src={loaderWebp} alt="loading..." />
  </SplashContainer>
);
