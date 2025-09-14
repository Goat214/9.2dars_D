import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Home, Recipe, Recipes } from "./pages";

import MainLayout from "./layouts/MainLayout";

// import { action, action as homeAction } from "./pages/Home";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          // action: homeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipe",
          element: <Recipe />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
