import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import './App.css'


import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      // { path: '/cart', element: <Cart /> },
      // {
      //   path: '/order/new',
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: '/order/:orderId',
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      //   action: updateOrderAction,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
