import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import ErrorPage from './ErrorPage'
import Categories from './Categories'
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:sections",
      element: <Categories />,
    },
    {
        path: 'cart',
        element: <Cart/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;