import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from '@navigation/appRouter';
import { routes } from '@navigation/routes';
import '@styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter routes={routes} />
);
