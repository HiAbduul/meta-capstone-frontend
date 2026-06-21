import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
// import ReservationsPage from "./pages/ReservationsPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
    // {
    //   path: "/reservations",
    //   element: <ReservationsPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
