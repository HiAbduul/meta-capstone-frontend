import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
// import ReservationsPage from "./pages/ReservationsPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    // {
    //   path: "/reservations",
    //   element: <ReservationsPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
