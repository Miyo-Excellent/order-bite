import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from '@navigation/router';
import { mainStore } from '@stores/main.store';
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
    <RouterProvider router={router} />
  </Provider>
);
