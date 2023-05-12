import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRouter } from '@navigation/appRouter';
import { routes } from '@navigation/routes';
import { mainStore } from '@stores/main.store.tsx';
import '@styles/global.scss';

let rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  const root: HTMLElement = document.createElement('main');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  rootElement = root;
}

ReactDOM.createRoot(rootElement).render(
  <Provider store={mainStore}>
    <AppRouter routes={routes} />
  </Provider>
);
