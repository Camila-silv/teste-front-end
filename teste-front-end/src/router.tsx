import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.component";
import { RootLayout } from "./components";
import Favorites from "./pages/favorites/favorites.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
