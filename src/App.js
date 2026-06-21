import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/menu",
          element: <MenuPage />,
        },
        {
          path: "/booking",
          element: <BookingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
