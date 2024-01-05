import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import Home from './views/Home';

const withAppLayout = (component: ReactNode) => <App>{component}</App>;

const router = createBrowserRouter([
  {
    path: '/',
    element: withAppLayout(<Home />)
  },
  {
    path: '/home',
    element: withAppLayout(<Home />)
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
