import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Home, Recipe, Recipes } from "./pages";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "recipes",
          element: <Recipes />,
        },
        {
          path: "recipes/:id", // 🔑 dynamic route
          element: <Recipe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
