import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/Order';
import Order from './features/order/CreateOrder';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Map from './features/map/Map';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    error: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order',
        element: <Order />,
        errorElement: <Error />,
      },
      {
        path: '/cart/map',
        element: <Map />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
