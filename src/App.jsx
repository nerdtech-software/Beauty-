import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Checkout from "./components/CheckOut";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Home from "./Page/Home";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
