import { Bottom } from '@components/buttom';
import { useRouteError } from 'react-router-dom';

export interface NotFoundViewProps {
}

export const NotFoundView = ({}: NotFoundViewProps) => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>


      <code>{error.message}</code>

      <Bottom to='/'>Go Home</Bottom>
    </div>
  );
}
